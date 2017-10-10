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

const sortGifs = (state) => {
  let sortedList = []
  let filteredList = []
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
}

// return state object with filtered list, currentQuery updated
const searchGifs = (state, currentQuery = '') => ({ ...state, currentQuery, filteredList: filterList(state.fullList, currentQuery) })

const getGifsSuccess = (state, newFullList) => {
  // sort results acorrding to current sort order
  const fullList = sortList(newFullList, state.isSortedAscending)
  let filteredList = []
  // if there is already query text in user input field, build filtered list
  if (state.currentQuery.length > 0) {
    filteredList = filteredList(state.query, fullList)
  // otherwise, place all gifs into filteredList
  } else {
    filteredList = fullList
  }
  return { ...state, fullList, filteredList, loading: false }
}


// REDUCER

const gifReducer = (state = initialState, action) => {
  const newFullList = action.data || []

  switch (action.type) {
    case GET_GIFS:
      return { ...state, loading: true }
    case GET_GIFS_SUCCESS:
      return getGifsSuccess(state, newFullList)
    case GET_GIFS_FAILURE:
      return { ...state, fetchError: true, loading: false }
    case SEARCH_GIFS:
      return searchGifs(state, action.query)
    case SORT_GIFS:
      return sortGifs(state)
    default:
      return state
  }
}

export default gifReducer
