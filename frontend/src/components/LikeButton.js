import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { fetchRandom } from '../actions/breeds'
import { fetchLikesForId, postLike, updateLike } from '../actions/users'
import './LikeButton.css'


export class LikeButton extends PureComponent {

  onClick = () =>
  {
    const {breed, fetchRandom, fetchLikesForId, currentUser, postLike, likes, updateLike} = this.props
    const newLike = {id: currentUser.id, breed: breed }
    postLike(newLike)
    fetchLikesForId(currentUser.id)
    console.log("Number of likes", likes.length )

    const amountOfLikes = {
      likes: likes.length
    }

    updateLike(amountOfLikes)
    //const numberoflikes = fetchLikesForId(currentUser.id)
    //console.log("Number of likes", numberoflikes.length)
    fetchRandom()
  }

  render() {
    return (
      <button className="like like__yes" onClick={this.onClick}>Like</button>
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
