import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {fetchRandom} from '../actions/breeds'
import './Image.css'

// import PropTypes from 'prop-types'

class Image extends PureComponent {

  componentWillMount(props) {
    this.props.fetchRandom()
  }


  render() {
    const {breed} = this.props
    return (
      <div>
        <img className='image' src={breed} alt='Dogs'/>
      </div>
    )
  }

}

const mapStateToProps = ({breed}) => ({
  breed,
  random: fetchRandom()
})

export default connect(mapStateToProps, {fetchRandom})(Image)
