import 'isomorphic-fetch'

// fetch url
export const url = 'http://api.giphy.com/v1/gifs/trending?limit=50&api_key=qZRb61x9uCy2XGkQNSuL51MF6Od8YqP6'

// constants
export const GET_GIFS = 'GET_GIFS'
export const GET_GIFS_SUCCESS = 'GET_GIFS_SUCCESS'
export const GET_GIFS_FAILURE = 'GET_GIFS_FAILURE'
export const SEARCH_GIFS = 'SEARCH_GIFS'
export const SORT_GIFS = 'SORT_GIFS'

// action creators
export const getGifsRequest = () => ({ type: GET_GIFS })
export const fetchGifsSuccess = data => ({ type: GET_GIFS_SUCCESS, data })
export const fetchGifsFailure = e => ({ type: GET_GIFS_FAILURE, e })
export const searchGifs = query => ({ type: SEARCH_GIFS, query })
export const sortGifs = () => ({ type: SORT_GIFS })

// ajax dispatchers notifying of giphy api request starting and completion
export const fetchGifs = () => (dispatch) => {
  dispatch(getGifsRequest())
  fetch(url)
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then(({ data }) => {
      if (!data) throw Error('No data!')
      dispatch(fetchGifsSuccess(data))
    })
    .catch((e) => {
      dispatch(fetchGifsFailure(e))
    })
}
