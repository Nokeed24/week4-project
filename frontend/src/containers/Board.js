import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton'
import NoLikeButton from '../components/NoLikeButton'
import Matches from '../components/Matches'
import './Board.css'
import Image from '../components/Image'
// import PropTypes from 'prop-types'


export default class Board extends PureComponent {
  static propTypes = {
    // products: PropTypes.arrayOf(productShape).isRequired,
  }

  render() {


    return (
      <div className='Board'>
        <Image />
        <LikeButton />
        <NoLikeButton />
        <Matches />
      </div>
    )
  }
}
