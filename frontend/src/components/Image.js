import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {fetchRandom} from '../actions/breeds'
import{getBreedName} from "../lib/functions"
import './Image.css'

// import PropTypes from 'prop-types'

class Image extends PureComponent {
  
  componentWillMount(props) {
    this.props.fetchRandom()

  }

  render() {
    const {breed, url, setName} = this.props
    return (
      <div>
        <img className='image' src={url} alt='Dogs'/>
        <p>{breed}</p>
      </div>
    )
  }
}

const mapStateToProps = ({breed, url}) => ({
  breed,
  url
})

export default connect(mapStateToProps, {fetchRandom})(Image)
