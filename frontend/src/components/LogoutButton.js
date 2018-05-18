import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'

export default class logoutButton extends PureComponent {

    onClick = () => {
      return window.location.reload()
    }

  render() {
    return (
      <Link to='/'>
        <button className="logoutButton" onClick={this.onClick}>
        <i class="fas fa-sign-out-alt fa-2x"></i>
        </button>
      </Link>
    )
  }
}
