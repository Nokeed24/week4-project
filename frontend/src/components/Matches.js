import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import './Matches.css'


export default class Matches extends PureComponent {

  render() {
    return (
      <Link to='/matches'>
        <button className="like like__match" onClick={this.props.onClick}>
          <i class="fas fa-paw fa-5x fa-spin"></i>
        </button>
      </Link>
    )
  }
}
