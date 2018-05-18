import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Matches.css'


export default class Matches extends PureComponent {

  render() {
    return (
      <Link to='/matches'>
        <button className="like like__match" onClick={this.props.onClick}>
          <i className="fas fa-paw fa-4x"></i>
        </button>
      </Link>
    )
  }
}
