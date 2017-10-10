import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import GifFooter from './gifFooter'

/**
* hover styles for class .gif-wrapper are in App.css, so as to 
* easily handle style changes to child component
**/
const styles = {
  gif: {
    width: '100%',
  },
}

const Gif = ({ gif, classes }) => {
  const altText = 'Loading in a giphy!'
  return (
    <div className="gif-wrapper" style={{ flexGrow: 1, padding: '10px' }}>
      <img className={classes.gif} src={gif.images.fixed_height.url} alt={altText} />
      <GifFooter gif={gif} />
    </div>
  )
}

Gif.propTypes = {
  gif: PropTypes.object.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default injectSheet(styles)(Gif)
