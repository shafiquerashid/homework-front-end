import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  urlItem: {
    cursor: 'pointer',
    color: 'white',
    '&:hover': {
      color: 'light-blue',
    },
  },
}


const GifUrlItem = ({ url, classes }) => {
  if (url) {
    return (
      <div>
	      <a className={classes.urlItem} href={url} target="_blank">Giphy</a>
      </div>
	  )
  }
  return null
}

GifUrlItem.propTypes = {
  url: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default injectSheet(styles)(GifUrlItem)
