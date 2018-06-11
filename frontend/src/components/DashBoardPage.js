// import React, {PureComponent} from 'react'
// import {connect} from 'react-redux'
// import {Link, Redirect} from 'react-router-dom'
// // import './MatchPage.css'

// class DashBoardPage extends PureComponent {

//   render() {
//     const {allusers, allbreeds, currentUser} = this.props
//     const numberOfUsers = allusers.length
//     const totalLikes = allbreeds.length
// 	  return (
//       <div>
//         <h1>All the Users of your app!</h1>


//         <div className="totalusers">
//           <span className="usersTotal">Dog lovers: {numberOfUsers}</span>
//         </div>
//         <div className="totallikes">
//           <span className="likesTotal">Doggos liked: {totalLikes}</span>
//         </div>
//         <div className='matches-div'>
// 	      <Link to='/main'>
//             <button className="like go-back" onClick={this.props.onClick}>
//               <i className="fas fa-arrow-alt-circle-left fa-4x"></i>
//             </button>
//         </Link>
//         {!currentUser && <Redirect to="/login" />}
// 	      </div>
//       </div>

// 	  )
//   }
// }

// const mapStateToProps = ({allbreeds, allusers, currentUser}) => ({
//   allusers,
//   allbreeds,
//   currentUser
// })

// export default connect(mapStateToProps, { })(DashBoardPage)
