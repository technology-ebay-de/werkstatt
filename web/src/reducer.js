import { combineReducers } from 'redux'
import { reducer as authReducer } from './modules/auth'
import { reducer as sketchpadListReducer } from './modules/sketchpad-list'
import { reducer as sketchpadReducer } from './pages/sketchpad'

export default combineReducers({
  sketchpadList: sketchpadListReducer,
  auth: authReducer,
  sketchpad: sketchpadReducer
})
