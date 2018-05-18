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
    const {allusers, allbreeds} = this.props
    const numberOfUsers = allusers.length
    const totalLikes = allbreeds.length
    console.log(this.props, 'PROPSPSSS')
	  return (
      <div>
        <h1>All the Users of your app!</h1>

        
        <div className="totalusers">
          <span className="usersTotal">Dog lovers: {numberOfUsers}</span>
        </div>
        <div className="totallikes">
          <span className="likesTotal">Doggos liked: {totalLikes}</span>
        </div>
        <div className='matches-div'>
	      <Link to='/main'>BACK</Link>
	      </div>
      </div>
	    
	  )
  }
}

const mapStateToProps = ({allbreeds, allusers}) => ({
  allusers,
  allbreeds
})

export default connect(mapStateToProps, { })(DashBoardPage)
