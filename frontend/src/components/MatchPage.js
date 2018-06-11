// import React, {PureComponent} from 'react'
// import {connect} from 'react-redux'
// import {Link, Redirect} from 'react-router-dom'
// import {likesOfUsersThatMatch, finalFilter} from '../lib/functions'
// import '../styles/SignupPage.css'
// import '../styles/dashboard.css'


// class MatchPage extends PureComponent {
//   state = { match: null }


//   componentDidMount() {
//     const {allusers, currentUser, likes, allbreeds} = this.props
//     const common = likesOfUsersThatMatch(allusers, currentUser, likes, allbreeds)
//     const numberOfMatchingLikes = finalFilter(common, likes)
//     const match = numberOfMatchingLikes.map(x => allusers.find(user => user.id === x.id))
//     this.setState({ match })
//   }




//   render() {
//     const {currentUser} = this.props
//     if (!this.state.match) {
//       return (<h1>{'You ain\'t nothing but a hounddog'}</h1>)
//     }
// 	  return (
// 	    <div className='matches-div'>
//         <h1 className='match-header'>{`Matching dawgs`}</h1>
//         <table>
//           <thead>
//             <tr>
//               <th className='table-item'>Email</th>
//               <th className='table-item'>Common likes</th>
//             </tr>
//           </thead>
//           <tbody>
//             { this.state.match.map(user => (<tr key={user.id}>
//               <td className='table-item'>{user.email}</td>
//               <td className='table-item'>{user.likes}</td>
//             </tr>)) }
//           </tbody>
// 			  </table>
//         <Link to='/main'>
//           <button className="go-back" onClick={this.props.onClick}>
//             <i className="fas fa-arrow-alt-circle-left fa-4x"></i>
//           </button>
//         </Link>
//         {!currentUser && <Redirect to="/login" />}
// 	    </div>


// 	  )
//   }
// }

// const mapStateToProps = function (state) {
//   return {
//     allusers: state.allusers,
//     currentUser: state.currentUser,
//     likes: state.likes,
//     allbreeds: state.allbreeds,
//   }
// }

// export default connect(mapStateToProps, { })(MatchPage)
