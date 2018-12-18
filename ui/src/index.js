import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import App from './app'
import configureStore from './configureStore'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>
)

render(<Root />, document.getElementById('root'))
