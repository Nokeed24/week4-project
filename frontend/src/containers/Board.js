import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton'
import NoLikeButton from '../components/NoLikeButton'
import Matches from '../components/Matches'
import Image from '../components/Image'
// import SignupPage from '../components/SignupPage'
// import LoginPage from '../components/LoginPage'
import './Board.css'


export default class Board extends PureComponent {

  render() {


    return (

      <div className='Board'>
        <div>
          <Image />
          <div className='like-buttons'>
            <LikeButton />
            <NoLikeButton />
          </div>
          <Matches />
        </div>
      </div>
    )
  }
}
