import { connect } from 'react-redux'
import { fetchGifs } from '../actions/gif'
import GifMosaic from '../components/gifMosaic'

const mapStateToProps = state => ({ gifs: state.gifs })


const mapDispatchToProps = dispatch => ({
  fetchGifs: () => { dispatch(fetchGifs()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(GifMosaic)
