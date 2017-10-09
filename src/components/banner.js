import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  banner: {
    lineHeight: '1.5em',
    fontSize: '1em',
    color: 'white',
    width: '100%',
    padding: '.5em 0',
    backgroundColor: 'rgba(0, 0, 0, .9)',
    textAlign: 'center',
  },
}

const Banner = ({ classes = {} }) => (
  <div className={classes.banner}>
    Trending GiphEaze by Shafique
  </div>
)

Banner.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default injectSheet(styles)(Banner)
