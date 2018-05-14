import React, { PureComponent } from 'react'
import LikeButton from '../components/LikeButton'
import NoLikeButton from '../components/NoLikeButton'
import Matches from '../components/Matches'
import './Board.css'
// import PropTypes from 'prop-types'


export default class Board extends PureComponent {
  static propTypes = {
    // products: PropTypes.arrayOf(productShape).isRequired,
  }

  render() {


    return (
      <div className='Board'>
        <LikeButton />
        <NoLikeButton />
        <Matches />
      </div>
    )
  }
}
