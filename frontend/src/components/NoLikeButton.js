import React, { PureComponent } from 'react'
<<<<<<< HEAD
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRandom } from '../actions/breeds'
=======
import './NoLikeButton.css'

>>>>>>> lud

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
      <button className="like like__no" onClick={this.onClick}>Dislike</button>
    )
  }
}

export default connect(null, { fetchRandom })(NoLikeButton)