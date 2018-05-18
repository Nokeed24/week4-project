import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import '../styles/dashboard.css'

class DashBoardPage extends PureComponent {

  render() {
    const {allusers, allbreeds} = this.props
    const numberOfUsers = allusers.length
    const totalLikes = allbreeds.length
    console.log(this.props, 'PROPSPSSS')
	  return (
      <div className='dashboard'>
        <h1>All the Users of your app!</h1>


        <div className="totalusers">
          <span className="usersTotal">Dog lovers: {numberOfUsers}</span>
        </div>
        <div className="totallikes">
          <span className="likesTotal">Doggos liked: {totalLikes}</span>
        </div>
        <div className='matches-div'>
	      <Link to='/main'>
            <button className="like go-back" onClick={this.props.onClick}>
              <i className="fas fa-arrow-alt-circle-left fa-4x"></i>
            </button>
          </Link>
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
