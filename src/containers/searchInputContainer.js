import { connect } from 'react-redux'
import { searchGifs, sortGifs } from '../actions/gif'
import SearchInput from '../components/searchInput'

const mapStateToProps = state => ({ isSortedAscending: state.gifs.isSortedAscending })

const mapDispatchToProps = dispatch => ({
  searchGifs: query => dispatch(searchGifs(query)),
  sortGifs: () => dispatch(sortGifs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
