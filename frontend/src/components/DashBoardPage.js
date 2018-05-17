import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

import {matchUsers} from '../lib/functions'
// import './MatchPage.css'


class DashBoardPage extends PureComponent {


  componentDidMount() {
    const {allusers, allbreeds} = this.props
    console.log(allusers,allbreeds, 'dashdashdashdsah')
    matchUsers(allusers, allbreeds)
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

const mapStateToProps = ({allbreeds, allusers}) => ({
  allusers,
  allbreeds
})

export default connect(mapStateToProps, { })(DashBoardPage)
