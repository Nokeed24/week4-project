import React, { PureComponent } from 'react'
import './LikeButton.css'


export default class LikeButton extends PureComponent {

  render() {
    return (
      <button className="like like__yes" onClick={this.props.onClick}>Like</button>
    )
  }
}
