import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton'
import NoLikeButton from '../components/NoLikeButton'
import {connect} from 'react-redux'
import Matches from '../components/Matches'
import Image from '../components/Image'
import {Redirect} from 'react-router-dom'
import DashBoard from '../components/DashBoard'
import LogoutButton from '../components/LogoutButton'
import './Board.css'


class Board extends PureComponent {

  render() {

    const {currentUser} = this.props
    console.log(currentUser, 'THISISWHATIAMLOOKINGFOR')
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
            {currentUser.isAdmin && <DashBoard />}
          </div>
          {currentUser && <div className='logout-button'>
            <LogoutButton />
          </div>}

        </div>}
        {!currentUser && <Redirect to="/login" />}
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
