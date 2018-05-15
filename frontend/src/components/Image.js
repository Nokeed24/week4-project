import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {fetchRandom} from '../actions/breeds'
import './Image.css'

// import PropTypes from 'prop-types'

class Image extends PureComponent {
  
  componentWillMount(props) {
    this.props.fetchRandom()

  }

  getBreedName(breed)
  {
    const breedName = breed.split('/')
    const newBreed = breedName[4]
    return newBreed
  }

  render() {
    const {breed} = this.props
    return (
      <div>
        <img className='image' src={breed} alt='Dogs'/>
        <p>{this.getBreedName(breed)}</p>
      </div>
    )
  }

}

const mapStateToProps = ({breed}) => ({
  breed,
  random: fetchRandom()
})

export default connect(mapStateToProps, {fetchRandom})(Image)
