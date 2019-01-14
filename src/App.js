import React from 'react'
import { hot, setConfig } from 'react-hot-loader'

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true, // RHL will not change render method
})

const App = () => <div>Hello World!</div>

export default hot(module)(App)
