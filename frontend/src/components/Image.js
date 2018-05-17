import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {fetchRandom} from '../actions/breeds'
import { fetchLikesForId, updateLike } from '../actions/users'
import './Image.css'

// import PropTypes from 'prop-types'

class Image extends PureComponent {

  componentWillMount(props) {
    const {currentUser, fetchRandom, fetchLikesForId, updateLike, likes} = this.props
    fetchRandom()
    fetchLikesForId(currentUser.id)
    if(likes !== null)
    {
      console.log("I WANT TO SEE THIS")
      const amountOfLikes = {likes: likes.length}
      updateLike(amountOfLikes)
    }
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

const mapStateToProps = ({breed, url, currentUser, likes, like, updateLike}) => ({
  breed,
  url,
  currentUser,
  likes,
  like

})

export default connect(mapStateToProps, {fetchRandom, fetchLikesForId, updateLike})(Image)
