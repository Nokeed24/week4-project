import React, { PureComponent } from 'react'

export default class LikeButton extends PureComponent {

  render() {
    return (
      <button className="like" onClick={this.props.onClick}>like</button>
    )
  }
}
