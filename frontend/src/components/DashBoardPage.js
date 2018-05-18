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
    console.log(this.props, 'PROPSPSSS')
	  return (
      <div>
        <h1>All Users of you app!</h1>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            { allusers.map(user => (
              <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.likes}</td>
              </tr>)) }
          </tbody>
				</table>
        <span className="usersTotal">Number of users: {numberOfUsers}</span>
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
