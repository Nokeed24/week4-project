import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { fetchRandom } from '../actions/breeds'
import { fetchLikesForId, postLike } from '../actions/users'
import './LikeButton.css'


export class LikeButton extends PureComponent {

  onClick = () =>
  {
    const {breed, fetchRandom, fetchLikesForId, currentUser, postLike, likes} = this.props
    const newLike = {id: currentUser.id, breed: breed }
    postLike(newLike)
    fetchLikesForId(currentUser.id)
    console.log("Number of likes", likes.length )
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

const mapStateToProps = ({breed, url, currentUser, likes }) => ({
  breed,
  url,
  likes,
  currentUser
})

export default connect(mapStateToProps, { fetchRandom, fetchLikesForId, postLike })(LikeButton)