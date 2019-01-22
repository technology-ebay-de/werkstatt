export const LOAD_SKETCHPAD_REQUEST = 'pages/sketchpad/LOAD_SKETCHPAD_REQUEST'
export const LOAD_SKETCHPAD_SUCCESS = 'pages/sketchpad/LOAD_SKETCHPAD_SUCCESS'
export const LOAD_SKETCHPAD_FAILURE = 'pages/sketchpad/LOAD_SKETCHPAD_FAILURE'

export const loadSketchPadDataAction = {
  request: id => ({
    type: LOAD_SKETCHPAD_REQUEST,
    id
  }),
  success: data => ({
    type: LOAD_SKETCHPAD_SUCCESS,
    data
  }),
  failure: error => ({
    type: LOAD_SKETCHPAD_FAILURE,
    error
  })
}
