import React, { PureComponent } from 'react'
import './Matches.css'


export default class Matches extends PureComponent {

  render() {
    return (
      <button className="like like__match" onClick={this.props.onClick}>Matches</button>
    )
  }
}
