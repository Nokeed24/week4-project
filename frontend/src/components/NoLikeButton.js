import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class NoLikeButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="like" onClick={this.props.onClick}>Dislike</button>
    )
  }
}
