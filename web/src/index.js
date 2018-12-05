import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import configureStore from './configureStore'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

render(<Root />, document.getElementById('root'))
