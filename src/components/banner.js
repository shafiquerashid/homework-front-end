import React from 'react'
import injectSheet from 'react-jss'

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

export default injectSheet(styles)(Banner)
