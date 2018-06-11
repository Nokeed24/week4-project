import React, { PureComponent } from 'react'
// import LikeButton from '../components/LikeButton'
// import NoLikeButton from '../components/NoLikeButton'
import {connect} from 'react-redux'
// import Matches from '../components/Matches'
// import Image from '../components/Image'
import {Redirect} from 'react-router-dom'
// import DashBoard from '../components/DashBoard'
import LogoutButton from '../components/LogoutButton'
import './Board.css'


class Board extends PureComponent {

  render() {

    // const {currentUser} = this.props
    return (
      <div className='Board'>
        {/* { currentUser && */}
          <div>
            <p>test123</p>
          </div>
        {/* } */}
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
