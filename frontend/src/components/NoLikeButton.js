import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRandom } from '../actions/breeds'
import './NoLikeButton.css'


export class NoLikeButton extends PureComponent {
  static propTypes = {

  }
  
  onClick = () => 
  {
    const {url, fetchRandom} = this.props
    fetchRandom() 
  }

  render() {
    return (
      <button className="like like__no" onClick={this.onClick}>Dislike</button>
    )
  }
}

const mapStateToProps = ({breed, url}) => ({
  breed,
  url
  //random: fetchRandom()
})


export default connect(null, { fetchRandom })(NoLikeButton)