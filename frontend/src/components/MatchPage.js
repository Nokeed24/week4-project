import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

import {matchUsers} from '../lib/functions'
// import './MatchPage.css'


class MatchPage extends PureComponent {


  componentDidMount() {
    const {allusers, currentUser, likes, allbreeds} = this.props
    console.log(allusers, 'THISNAGOINGOIANGOINAOS')
    matchUsers(allusers, currentUser, likes, allbreeds)
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
