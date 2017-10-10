import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import GifUserNameItem from './gifUserNameItem'
import GifDateItem from './gifDateItem'
import GifUrlItem from './gifUrlItem'

// styles for gifFooter are in App.css
const styles = {}

const GifFooter = ({ gif, classes }) => {
  return (
    <div className="gif-footer">
      <GifUserNameItem user={gif.user} />
      <GifDateItem date={gif.import_datetime} />
      <GifUrlItem url={gif.url} />
    </div>
  )
}

GifFooter.propTypes = {
  gif: PropTypes.object.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default injectSheet(styles)(GifFooter)
