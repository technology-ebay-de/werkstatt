import { combineReducers } from 'redux'
import { reducer as authReducer } from './modules/auth'
import { reducer as dashboardReducer } from './pages/dashboard'
import { reducer as sketchPadReducer } from './pages/sketchpad'

export default combineReducers({
  sketchPad: sketchPadReducer,
  auth: authReducer,
  dashboard: dashboardReducer
})
