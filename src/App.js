import React from 'react'
import GifContainer from './containers/gifContainer'
import Banner from './components/banner'
import SearchInputContainer from './containers/searchInputContainer'

const App = () => (
  <div className="App">
    <Banner />
    <SearchInputContainer />
    <GifContainer />
  </div>
)

export default App
