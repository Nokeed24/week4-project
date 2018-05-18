import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'

import {likesOfUsersThatMatch, finalFilter} from '../lib/functions'


class MatchPage extends PureComponent {
  state = { match: null }


  componentDidMount() {
    const {allusers, currentUser, likes, allbreeds} = this.props
    //console.log(allusers, 'THISNAGOINGOIANGOINAOS')
    const common = likesOfUsersThatMatch(allusers, currentUser, likes, allbreeds)
    const numberOfMatchingLikes = finalFilter(common, likes)
    console.log(numberOfMatchingLikes)
    console.log(allusers);
    const match = numberOfMatchingLikes.map(x => allusers.find(user => user.id === x.id))
    //allusers.find(user => user.id === numberOfMatchingLikes[0].id)
    console.log(match);
    this.setState({ match })
  }




  render() {
    console.log(this.state, 'STATETAUINT')
    if (!this.state.match) {
      return (<h1>{'You ain\'t nothing but a hounddog'}</h1>)
    }
	  return (
	    <div className='matches-div'>
        <h1>{`Your top dog ${ this.state.match.email }`}</h1>
	      <Link to='/main'>BACK</Link>
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
