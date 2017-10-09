import { GET_GIFS, GET_GIFS_SUCCESS, GET_GIFS_FAILURE, SEARCH_GIFS } from '../actions/gif'

const initialState = {
  fullList: [], // entire response array from API
  filteredList: [], // current filtered list based on user's last search string
  currentQuery: '', // user's last search string
  loading: false, // waiting on API response
  fetchError: false, // last API fetch responded with error
}

/**
* used to filter full list of gif's by those matching
* user's query (using the `slug` attribute of Gif objects)
**/
const filterList = (arr, query) => arr.filter(gif => gif.slug.indexOf(query) > -1)

const gifReducer = (state = initialState, action) => {
  const fullList = action.data || []
  const currentQuery = action.query || ''
  let filteredList = []
 
  switch (action.type) {
    case GET_GIFS:
      // return state object with state.loading set to true
      return { ...state, loading: true }
    case GET_GIFS_SUCCESS:
      // if there is already query text in user input field, build filtered list
      if (state.currentQuery.length > 0) {
        filteredList = filteredList(state.query, action.data)
      // otherwise, place all gifs into filteredList
      } else {
        filteredList = action.data
      }
      return { ...state, fullList, filteredList, loading: false }
    case GET_GIFS_FAILURE:
      return { ...state, fetchError: true, loading: false }
    case SEARCH_GIFS:
      // return state object with filtered list, currentQuery updated
      return { ...state, currentQuery, filteredList: filterList(state.fullList, action.query) }
    default:
      return state
  }
}

export default gifReducer
