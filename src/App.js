import React from 'react'
import GifContainer from './containers/gifContainer'
import Banner from './components/banner'

const App = ({ classes }) => (
  <div className="App">
      <Banner />
      <GifContainer />
  </div>
)

export default App
