import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'

export default class DashBoard extends PureComponent {

  render() {
    return (
      <Link to='/DashBoard'>
        <button className="like like__match" onClick={this.props.onClick}>
          <i class="fas fa-paw fa-5x fa-spin"></i>
        </button>
      </Link>
    )
  }
}
