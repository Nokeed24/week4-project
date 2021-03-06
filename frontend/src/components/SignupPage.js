import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/users'
import SignUpForm from './SignUpForm'
import {Redirect} from 'react-router-dom'
import '../styles/SignupPage.css'


class SignupPage extends PureComponent {
	handleSubmit = (data) => {
	  this.props.postSignup(data.email, data.password)
	}

	render() {
	  if (this.props.signup.success) return (
	    <Redirect to="/" />
	  )

	  return (
	    <div className='signup-div'>
	      <h1>Sign up</h1>

	      <SignUpForm onSubmit={this.handleSubmit} />

	      <p style={{color:'red'}}>{ this.props.postSignup.error }</p>
	    </div>
	  )
	}
}

const mapStateToProps = function (state) {
  return {
    signup: state.signup
  }
}

export default connect(mapStateToProps, {postSignup: signup})(SignupPage)
