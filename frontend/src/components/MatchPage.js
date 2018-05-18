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
    console.log(numberOfMatchingLikes[0])
    console.log(allusers);
    const match = allusers.find(user => user.id === numberOfMatchingLikes[0].id)
    console.log(match);
    this.setState({ match })
  }




  render() {
    const printMatches = (amountOfLikes) => {
      this.numberOfMatchingLikes.map(match => {
          this.props.allusers.find(x => {
            if (x.id === match.id) {
              return x.email
            }
          })
      })
    }
    if (!this.state.match) {
        return (<h1>{'You ain\'t nothing but a hounddog'}</h1>)
    }
	  return (
	    <div className='matches-div'>
        <h1>{`Your top dog ${ this.state.match.email }`}</h1>
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
