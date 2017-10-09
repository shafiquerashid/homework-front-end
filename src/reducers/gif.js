import { GET_GIFS, GET_GIFS_SUCCESS, GET_GIFS_FAILURE, SEARCH_GIFS } from '../actions/gif'

const initialState = {
  fullList: [], // entire response array from API
  filteredList: [], // current filtered list based on user's last search string
  currentQuery: '', // user's last search string
  loading: false,
  fetchError: false,
}
const gifReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GIFS:

      // return state object with state.loading set to false
      return state
    case GET_GIFS_SUCCESS:

      // state updated with gif data, UI rendered
      return state
    case GET_GIFS_FAILURE:

      // return state object with state.fetchError set to true
      return state
    case SEARCH_GIFS:

      // return state object with state.fetchError set to true
      return state
    default:
      return state
  }
}

export default gifReducer
