import React from 'react'
import PropTypes from 'prop-types'

// Return div container username string, otherwise, no need to render
const GifUserNamelItem = ({ user }) => user && user.display_name ? (<div>Uploaded by {user.display_name}</div>) :  null

GifUserNamelItem.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default GifUserNamelItem
