import React, { PureComponent } from 'react'
import './NoLikeButton.css'


export default class NoLikeButton extends PureComponent {

  render() {
    return (
      <button className="like like__no" onClick={this.props.onClick}>Dislike</button>
    )
  }
}
