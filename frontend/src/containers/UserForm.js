import React, { PureComponent } from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpFrom'

// import './Board.css'
// import PropTypes from 'prop-types'


export default class Board extends PureComponent {
  static propTypes = {
    // products: PropTypes.arrayOf(productShape).isRequired,
  }

  render() {


    return (
      <div>
        <LoginForm />
        <SignUpForm />      
      </div>
    )
  }
}
