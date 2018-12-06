import { LOAD_CURRENT_USER_REQUEST, LOAD_CURRENT_USER_FAILURE, LOAD_CURRENT_USER_SUCCESS } from './actions'

export const initialState = {
  isLoading: false,
  currentUser: {},
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_CURRENT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case LOAD_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...action.data
        },
        isLoading: false
      }

    case LOAD_CURRENT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}
