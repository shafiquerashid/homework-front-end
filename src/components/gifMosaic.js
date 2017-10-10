import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Gif from './gif'

const styles = {
  gifMosaic: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
  },

  fetchStatusMessage: {
    display: 'block',
    fontSize: '1em',
    textAlign: 'center',
    paddingTop: '2%',
    color: 'white',
  },

  fetchStatusGif: {
    margin: 'auto',
    display: 'block',
    width: '30%',
    paddingTop: '10%',
  },
}


class GifMosaic extends React.Component {
  componentDidMount() {
    this.props.fetchGifs()
  }

  render() {
    const loadingText = 'Be Back in a Giphy.'
    const errorText = 'Oops, our bad. Try again in a bit.'
    const loadingGif = 'https://media.giphy.com/media/TvLuZ00OIADoQ/giphy.gif'
    const errorGif = 'https://media.giphy.com/media/rvDtLCABDMaqY/giphy.gif'
    // Waiting for API response
    if (this.props.gifs.loading === true) {
      return (
        <div>
          <img className={this.props.classes.fetchStatusGif} src={loadingGif} alt="Loading..." />
          <div className={this.props.classes.fetchStatusMessage}>{loadingText}</div>
        </div>
      )
    } else if (this.props.gifs.fetchError === true) {
      return (
        <div>
          <img className={this.props.classes.fetchStatusGif} src={errorGif} alt="Oops" />
          <div className={this.props.classes.fetchStatusMessage}>{errorText}</div>
        </div>
      )
    }
    const gifs = this.props.gifs.filteredList.map(gif => <Gif key={gif.id} gif={gif} />)
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
