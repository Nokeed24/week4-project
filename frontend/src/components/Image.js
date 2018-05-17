import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {fetchRandom} from '../actions/breeds'
import { fetchLikesForId, updateLike, fetchAllLikes } from '../actions/users'
import {fetchAllUsers} from '../actions/users1'
import '../styles/Image.css'

// import PropTypes from 'prop-types'

class Image extends PureComponent {
  componentDidMount() {
    const {fetchAllUsers} = this.props
    fetchAllUsers()

  }
  componentWillMount(props) {
    const {currentUser, fetchRandom, fetchLikesForId, updateLike, likes, fetchAllLikes} = this.props
    fetchRandom()
    fetchLikesForId(currentUser.id)
    fetchAllLikes()
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
      <div className='container-image'>
        <h1 className="title"> Choose Wisely!</h1>
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


export default connect(mapStateToProps, {fetchRandom, fetchLikesForId, updateLike, fetchAllUsers, fetchAllLikes})(Image)
