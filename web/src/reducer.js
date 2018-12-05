import { combineReducers } from 'redux'
import { reducer as sketchPadReducer } from './pages/sketchpad'
import { reducer as userReducer } from './modules/user'

export default combineReducers({
  sketchPad: sketchPadReducer,
  user: userReducer
})
