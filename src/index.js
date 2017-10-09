import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReactDOM from 'react-dom'
import App from './App'
import gifReducer from './reducers/gif'

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(combineReducers({ gifs: gifReducer }), composeEnhancers(applyMiddleware(thunkMiddleware)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
