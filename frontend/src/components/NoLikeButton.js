import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchRandom } from '../actions/breeds'
import './NoLikeButton.css'


export class NoLikeButton extends PureComponent {
  static propTypes = {

  }

  onClick = () =>
  {
    const {fetchRandom} = this.props
    fetchRandom()
  }

  render() {
    return (
      <button className="like like__no" onClick={this.onClick}>
        <i class="fas fa-times-circle fa-5x"></i>
      </button>
    )
  }
}

export default connect(null, { fetchRandom })(NoLikeButton)
