import { LOAD_SKETCH_PAD_REQUEST, LOAD_SKETCH_PAD_FAILURE, LOAD_SKETCH_PAD_SUCCESS } from './actions'

export const initialState = {
  isLoading: false,
  data: {
  },
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_SKETCH_PAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case LOAD_SKETCH_PAD_SUCCESS:
      return {
        ...state,
        ...action.data,
        isLoading: false
      }

    case LOAD_SKETCH_PAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}
