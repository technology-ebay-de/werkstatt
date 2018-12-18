export const LOAD_SKETCHPAD_LIST_REQUEST = 'modules/sketchpad-list/LOAD_SKETCHPAD_LIST_REQUEST'
export const LOAD_SKETCHPAD_LIST_SUCCESS = 'modules/sketchpad-list/LOAD_SKETCHPAD_LIST_SUCCESS'
export const LOAD_SKETCHPAD_LIST_FAILURE = 'modules/sketchpad-list/LOAD_SKETCHPAD_LIST_FAILURE'

export const loadSketchpadListDataAction = {
  request: (limit) => ({
    type: LOAD_SKETCHPAD_LIST_REQUEST,
    limit
  }),
  success: data => ({
    type: LOAD_SKETCHPAD_LIST_SUCCESS,
    data
  }),
  failure: error => ({
    type: LOAD_SKETCHPAD_LIST_FAILURE,
    error
  })
}
