import React, { PureComponent } from 'react'
import './Matches.css'


export default class Matches extends PureComponent {

  render() {
    return (
      <button className="like like__match" onClick={this.props.onClick}>
        <i class="fas fa-paw fa-3x fa-spin"></i>  Matches
      </button>
    )
  }
}
