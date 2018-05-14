import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class LikeButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="like" onClick={this.props.onClick}>like</button>
    )
  }
}
