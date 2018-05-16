import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { fetchRandom } from '../actions/breeds'
import {postLike} from '../actions/users'
import { fetchLikesForId } from '../actions/users'
import './LikeButton.css'


export class LikeButton extends PureComponent {

  onClick = () =>
  {
    console.log("Onclick GREEN BUTTON")
    const {breed, fetchRandom, fetchLikesForId, currentUser, postLike} = this.props
    const newLike = {id: currentUser.id, breed: breed }
    console.log(newLike)
    postLike(newLike)
    fetchLikesForId(currentUser.id)
    fetchRandom()
  }

  render() {
    return (
      <button className="like like__yes" onClick={this.onClick}>
        <i class="fas fa-check-circle fa-5x"></i>
      </button>
    )
  }
}

const mapStateToProps = ({breed, url, currentUser,likes }) => ({
  breed,
  url,
  currentUser
})

export default connect(mapStateToProps, { fetchRandom, fetchLikesForId, postLike })(LikeButton)
