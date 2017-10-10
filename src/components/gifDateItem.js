import React from 'react'
import PropTypes from 'prop-types'
import timeAgo from 'node-time-ago'

const GifDateItem = ({ date }) => {
  if (date) {
    return (
      <div>From {timeAgo(date)}</div>
    )
  }
  return null
}

GifDateItem.propTypes = {
  date: PropTypes.string,
}

export default GifDateItem
