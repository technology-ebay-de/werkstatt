import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createInitialState from './createInitialState'
import rootReducer from './reducer'
import rootSaga from './rootSaga'

const initialState = createInitialState()

export default () => {
  const reduxDevToolsEnabled =
    typeof window !== 'undefined' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined'
  const composeEnhancer = reduxDevToolsEnabled
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

  const sagaMiddleware = createSagaMiddleware()
  const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware))
  const store = createStore(rootReducer, initialState, enhancer)
  sagaMiddleware.run(rootSaga)
  return store
}
