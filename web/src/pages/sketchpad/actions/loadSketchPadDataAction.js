export const LOAD_SKETCH_PAD_REQUEST = 'pages/sketchpad/LOAD_SKETCH_PAD_REQUEST'
export const LOAD_SKETCH_PAD_SUCCESS = 'pages/sketchpad/LOAD_SKETCH_PAD_SUCCESS'
export const LOAD_SKETCH_PAD_FAILURE = 'pages/sketchpad/LOAD_SKETCH_PAD_FAILURE'

export const loadSketchPadDataAction = {
  request: id => ({
    type: LOAD_SKETCH_PAD_REQUEST,
    id
  }),
  success: data => ({
    type: LOAD_SKETCH_PAD_SUCCESS,
    data
  }),
  failure: error => ({
    type: LOAD_SKETCH_PAD_FAILURE,
    error
  })
}
