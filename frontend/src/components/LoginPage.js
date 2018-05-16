import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users'
import LoginForm from './LoginForm'
import './LoginPage.css'


class LoginPage extends PureComponent {
  handleSubmit = (data) => {
    this.props.login(data.email, data.password)
  }

  render() {
    const { loginError } = this.props
    console.log(loginError)
    const errorColor = {
      color: 'red'
    }
    // if (this.props.currentUser) return (
    //   <Redirect to='/' />
    // )

    return (
      <div className='login-div'>
        <h1>Login</h1>

        <LoginForm onSubmit={this.handleSubmit} />

        { loginError && <p style={errorColor}>{loginError}</p>}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  console.log(state)
  return {
    currentUser: state.currentUser,
    loginError: state.login.error
  }
}

export default connect(mapStateToProps, {login})(LoginPage)
