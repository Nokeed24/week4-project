import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

import {likesOfUsersThatMatch, finalFilter} from '../lib/functions'


class MatchPage extends PureComponent {
  state = { match: null }


  componentDidMount() {
    const {allusers, currentUser, likes, allbreeds} = this.props
    const common = likesOfUsersThatMatch(allusers, currentUser, likes, allbreeds)
    const numberOfMatchingLikes = finalFilter(common, likes)
    const match = numberOfMatchingLikes.map(x => allusers.find(user => user.id === x.id))
    this.setState({ match })
  }




  render() {
    if (!this.state.match) {
      return (<h1>{'You ain\'t nothing but a hounddog'}</h1>)
    }
	  return (
	    <div className='matches-div'>
        <h1>{`Your top dogs`}</h1>
        <table>
          <thead>
            <tr>
              <th>email</th>
              <th>likes in common</th>
            </tr>
          </thead>
          <tbody>
            { this.state.match.map(user => (<tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.likes}</td>
            </tr>)) }
          </tbody>
			  </table>
        <Link to='/main'>
          <button className="go-back" onClick={this.props.onClick}>
            <i className="fas fa-arrow-alt-circle-left fa-4x"></i>
          </button>
        </Link>
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
