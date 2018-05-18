import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { fetchRandom } from '../actions/breeds'
import { fetchLikesForId, postLike, updateLike } from '../actions/users'
import '../styles/LikeButton.css'


export class LikeButton extends PureComponent {

  onClick = () =>
  {
    const {breed, fetchRandom, fetchLikesForId, currentUser, postLike, likes, updateLike} = this.props
    const newLike = {id: currentUser.id, breed: breed }
    postLike(newLike)
    if(likes !== null)
    {
      fetchLikesForId(currentUser.id)
      const amountOfLikes = {likes: likes.length + 1}
      updateLike(amountOfLikes)
    }
    fetchRandom()
  }

  render() {
    return (
      <button className="like like__yes" onClick={this.onClick}>
        <i className="fas fa-check-circle fa-5x"></i>
      </button>
    )
  }
}

const mapStateToProps = ({breed, url, currentUser, likes, updateLike }) => ({
  breed,
  url,
  likes,
  currentUser,
  updateLike
})


export default connect(mapStateToProps, { fetchRandom, fetchLikesForId, postLike, updateLike })(LikeButton)
