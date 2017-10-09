import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Gif from './gif'

const styles = {
  gifMosaic: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0, 0, 0, .9)',
    height: '100%',
  },

  fetchStatusMessage: {
    display: 'block',
    fontSize: '1.5em',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, .9)',
    textAlign: 'center',
    paddingTop: '2%',
  },

  fetchStatusGif: {
    width: '100%',
    paddingTop: '2%',
  },
}


class GifMosaic extends React.Component {
  componentDidMount() {
    this.props.fetchGifs()
  }

  render() {
    const loadingText = 'Back in a Giphy.'
    const errorText = 'Oops, our bad. Try again in a bit.'
    const loadingGif = 'https://media.giphy.com/media/TvLuZ00OIADoQ/giphy.gif'
    const errorGif = 'https://media.giphy.com/media/TvLuZ00OIADoQ/giphy.gif'
    // Waiting for API response
    if (this.props.gifs.loading === true) {
      return (
        <div className={this.props.classes.fetchStatusMessage}>{loadingText}
          <img className={this.props.classes.fetchStatusGif} src={loadingGif} alt="Loading..." />
        </div>
      )
    } else if (this.props.gifs.fetchError === true) {
      return (
        <div className={this.props.classes.fetchStatusMessage}>{errorText}
          <img className={this.props.classes.fetchStatusGif} src={errorGif} alt="Oops" />
        </div>
      )
    }
    let key = 0
    const gifs = this.props.gifs.filteredList.map(gif => <Gif key={key++} gif={gif} />)
    return (
      <div className={this.props.classes.gifMosaic}>
        {gifs}
      </div>
    )
  }
}

GifMosaic.propTypes = {
  gifs: PropTypes.PropTypes.object.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  fetchGifs: PropTypes.func.isRequired,
}

export default injectSheet(styles)(GifMosaic)
