import { GET_GIFS, GET_GIFS_SUCCESS, GET_GIFS_FAILURE, SEARCH_GIFS, SORT_GIFS } from '../actions/gif'

const initialState = {
  fullList: [], // entire response array from API
  filteredList: [], // current filtered list based on user's last search string
  currentQuery: '', // user's last search string
  loading: false, // waiting on API response
  fetchError: false, // last API fetch responded with error
  isSortedAscending: true, // tracks sort order of fullList
}


// HELPER FUNCTIONS

const sortList = (arr, sortAscending) => arr.slice().sort((x, y) => {
  const a = new Date(x.import_datetime)
  const b = new Date(y.import_datetime)
  if (sortAscending) {
    return a > b ? -1 : a < b ? 1 : 0
  }
  return a < b ? -1 : a > b ? 1 : 0
})

/**
* used to filter full list of gif's by those matching
* user's query (using the `slug` attribute of Gif objects)
**/
const filterList = (arr, query) => arr.filter(gif => gif.slug.indexOf(query) > -1)


// REDUCER

const gifReducer = (state = initialState, action) => {
  const currentQuery = action.query || ''
  let fullList = action.data || []
  let filteredList = []
  let sortedList = []

  switch (action.type) {
    case GET_GIFS:
      // return state object with state.loading set to true
      return { ...state, loading: true }
    case GET_GIFS_SUCCESS:
      // sort results acorrding to current sort order
      fullList = sortList(fullList, state.isSortedAscending)
      // if there is already query text in user input field, build filtered list
      if (state.currentQuery.length > 0) {
        filteredList = filteredList(state.query, fullList)
      // otherwise, place all gifs into filteredList
      } else {
        filteredList = fullList
      }
      return { ...state, fullList, filteredList, loading: false }
    case GET_GIFS_FAILURE:
      return { ...state, fetchError: true, loading: false }
    case SEARCH_GIFS:
      // return state object with filtered list, currentQuery updated
      return { ...state, currentQuery, filteredList: filterList(state.fullList, action.query) }
    case SORT_GIFS:
      // flip sort order and sort full list
      sortedList = sortList(state.fullList, !state.isSortedAscending)
      // if there is already query text in user input field, re-build sorted filtered list
      if (state.currentQuery.length > 0) {
        filteredList = filterList(sortedList, state.currentQuery)
      // otherwise, place all gifs into filteredList
      } else {
        filteredList = sortedList
      }
      return { ...state, fullList: sortedList, isSortedAscending: !state.isSortedAscending, filteredList }
    default:
      return state
  }
}

export default gifReducer
