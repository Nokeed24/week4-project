import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {fetchRandom} from '../actions/breeds'
import './Image.css'

// import PropTypes from 'prop-types'

class Image extends PureComponent {

  componentWillMount(props) {
    this.props.fetchRandom()

  }

  render() {
    const {breed, url} = this.props
    return (
      <div>
        <h1 className="title"> The Dog Tinder!</h1>
        <img className='image' src={url} alt='Dogs'/>
        <p className='breed'>{breed.charAt(0).toUpperCase() + breed.slice(1)}</p>
      </div>
    )
  }
}

const mapStateToProps = ({breed, url}) => ({
  breed,
  url
})

export default connect(mapStateToProps, {fetchRandom})(Image)
