import React, { PureComponent } from 'react'

export default class LikeButton extends PureComponent {

  render() {
    return (
      <button className="like like__yes" onClick={this.props.onClick}>like</button>
    )
  }
}
