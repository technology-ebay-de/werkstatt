import { LOAD_SKETCHPAD_LIST_REQUEST, LOAD_SKETCHPAD_LIST_FAILURE, LOAD_SKETCHPAD_LIST_SUCCESS } from './actions'

export const initialState = {
  isLoading: false,
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_SKETCHPAD_LIST_REQUEST:
      return {
        ...state,
        isLoading: false,
        error: null
      }

    case LOAD_SKETCHPAD_LIST_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      }

    case LOAD_SKETCHPAD_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}
