import { connect } from 'react-redux'
import { searchGifs } from '../actions/gif'
import SearchInput from '../components/searchInput'

const mapStateToProps = () => {}

const mapDispatchToProps = dispatch => ({
  searchGifs: query => dispatch(searchGifs(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
