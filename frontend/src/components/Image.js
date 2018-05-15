import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {fetchRandom} from '../actions/breeds'
// import PropTypes from 'prop-types'

class Image extends PureComponent {

  componentWillMount(props) {
    this.props.fetchRandom()
  }


  render() {
    const {breed} = this.props
    return (
      <div>
        <p>IMAGE GOES HERE</p>
        <img src={breed} />
      </div>
    )
  }

}

const mapStateToProps = ({breed}) => ({
  breed,
  random: fetchRandom()
})

export default connect(mapStateToProps, {fetchRandom})(Image)
