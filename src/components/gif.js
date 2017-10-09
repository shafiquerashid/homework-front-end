import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  gifWrapper: {
    flexGrow: 1,
  },
  
  gif: {
    width: '100%',
  },
}

const Gif = ({ gif, classes }) => {
  const altText = 'Loading in a giphy!'
  return (
    <div className={classes.gifWrapper}>
      <img className={classes.gif} src={gif.images.fixed_height.url} alt={altText} />
    </div>
  )
}

Gif.propTypes = {
  gif: PropTypes.PropTypes.object.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default injectSheet(styles)(Gif)
