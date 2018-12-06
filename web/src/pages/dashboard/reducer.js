import { LOAD_DASHBOARD_REQUEST, LOAD_DASHBOARD_FAILURE, LOAD_DASHBOARD_SUCCESS } from './actions'

export const initialState = {
  isLoading: false,
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_DASHBOARD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case LOAD_DASHBOARD_SUCCESS:
      return {
        ...state,
        ...action.data,
        isLoading: false
      }

    case LOAD_DASHBOARD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}
