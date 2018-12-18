import { LOAD_SKETCHPAD_REQUEST, LOAD_SKETCHPAD_FAILURE, LOAD_SKETCHPAD_SUCCESS } from './actions'

export const initialState = {
  isLoading: false,
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_SKETCHPAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case LOAD_SKETCHPAD_SUCCESS:
      return {
        ...state,
        ...action.data,
        isLoading: false
      }

    case LOAD_SKETCHPAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}
