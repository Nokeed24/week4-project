import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton'
import NoLikeButton from '../components/NoLikeButton'
import Matches from '../components/Matches'
import Image from '../components/Image'
import './Board.css'
import Image from '../components/Image'
// import PropTypes from 'prop-types'


export default class Board extends PureComponent {
  static propTypes = {
    // products: PropTypes.arrayOf(productShape).isRequired,
  }

  render() {


    return (
<<<<<<< HEAD
      <div className='Board'>
        <Image />
        <LikeButton />
        <NoLikeButton />
        <Matches />
=======
      <div>
        <div className="image">
          <Image />
        </div>

        <div className='Board'>
          <LikeButton />
          <NoLikeButton />
        </div>

        <div className='Board'>
          <Matches />
        </div>
>>>>>>> 0e9b967b2b5860396d408e7b2cf6953d300ab668
      </div>
    )
  }
}
