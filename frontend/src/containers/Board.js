import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton'
import NoLikeButton from '../components/NoLikeButton'
import {connect} from 'react-redux'
import Matches from '../components/Matches'
import Image from '../components/Image'
import {Redirect} from 'react-router-dom'
import './Board.css'


class Board extends PureComponent {

  render() {

    const {currentUser} = this.props
    return (
      <div className='Board'>
        { currentUser &&
        <div>
          <Image />
          <div className='like-buttons'>
            <LikeButton />
            <NoLikeButton />
          </div>
          <div className='match-buttons'>
            <Matches />
          </div>
        </div>}
        { !currentUser && <Redirect to="/login" />}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Board)
