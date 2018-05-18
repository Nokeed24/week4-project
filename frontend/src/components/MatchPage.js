import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

import {matchUsers, likesOfUsersThatMatch, finalFilter} from '../lib/functions'
// import './MatchPage.css'


class MatchPage extends PureComponent {


  componentDidMount() {
    const {allusers, currentUser, likes, allbreeds} = this.props
    //console.log(allusers, 'THISNAGOINGOIANGOINAOS')
    const common = likesOfUsersThatMatch(allusers, currentUser, likes, allbreeds)
    const numberOfMatchingLikes = finalFilter(common, likes)
    console.log(numberOfMatchingLikes[0])
  }


  render() {
    console.log(this.props, 'PROPSPSSS')
	  return (
	    <div className='matches-div'>
	      <Link to='/main'>BACK</Link>
	    </div>
	  )
  }
}

const mapStateToProps = function (state) {
  return {
    allusers: state.allusers,
    currentUser: state.currentUser,
    likes: state.likes,
    allbreeds: state.allbreeds
  }
}

export default connect(mapStateToProps, { })(MatchPage)
