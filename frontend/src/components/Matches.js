import React, { PureComponent } from 'react'

export default class Matches extends PureComponent {

  render() {
    return (
      <button className="like" onClick={this.props.onClick}>Matches</button>
    )
  }
}
