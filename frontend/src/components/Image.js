import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {fetchRandom} from '../actions/breeds'
import { fetchLikesForId } from '../actions/users'
import './Image.css'

// import PropTypes from 'prop-types'

class Image extends PureComponent {

  componentWillMount(props) {
    const {currentUser, fetchLikesForId} = this.props
    this.props.fetchRandom()
    this.props.fetchLikesForId(currentUser.id)
  }

  render() {
    const {breed, url} = this.props
    return (
      <div>
        <img className='image' src={url} alt='Dogs'/>
        <p>{breed}</p>
      </div>
    )
  }
}

const mapStateToProps = ({breed, url, currentUser, likes, like}) => ({
  breed,
  url,
  currentUser,
  likes,
  like

})

export default connect(mapStateToProps, {fetchRandom, fetchLikesForId})(Image)
