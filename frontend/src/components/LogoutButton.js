import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'

export default class logoutButton extends PureComponent {

    onClick = () => {

    }

    render() {
      return (
        <div className='log-out'>
          <Link to='/login'>
            <button className="logoutButton" onClick={this.onClick}>
              <i class="fas fa-sign-out-alt fa-2x"></i>
            </button>
          </Link>
        </div>
      )
    }
}
