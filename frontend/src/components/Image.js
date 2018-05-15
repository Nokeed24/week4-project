import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {fetchRandom,setBreedName} from '../actions/breeds'
import{getBreedName} from "../lib/functions"
import './Image.css'

// import PropTypes from 'prop-types'

class Image extends PureComponent {
  
  componentWillMount(props) {
    this.props.fetchRandom()

  }

  // getBreedName(breed)
  // {
  //   const breedName = breed.split('/')
  //   const newBreed = breedName[4]
  //   return newBreed
  // }

  render() {
    const {breed} = this.props
    setBreedName(breed)
    return (
      <div>
        <img className='image' src={breed} alt='Dogs'/>
        <p>{getBreedName(breed)}</p>
      </div>
    )
  }

}

const mapStateToProps = ({breed}) => ({
  breed,
  //random: fetchRandom()
})

export default connect(mapStateToProps, {fetchRandom, setBreedName})(Image)
