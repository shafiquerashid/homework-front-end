import React from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import Gif from './gif'

const styles = {
  gifMosaic: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}


class GifMosaic extends React.Component {
  componentDidMount() {
    this.props.fetchGifs()
  }

  render() {
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
