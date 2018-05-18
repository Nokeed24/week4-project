import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'

export default class logoutButton extends PureComponent {

    onClick = () => {

    }

  render() {
    return (
      <Link to='/login'>
        <button className="logoutButton" onClick={this.onClick}>
        <i class="fas fa-sign-out-alt"></i>
        </button>
      </Link>
    )
  }
}