import React, { PureComponent } from 'react'

export default class NoLikeButton extends PureComponent {

  render() {
    return (
      <button className="like" onClick={this.props.onClick}>Dislike</button>
    )
  }
}
