export const LOAD_CURRENT_USER_REQUEST = 'modules/user/LOAD_CURRENT_USER_REQUEST'
export const LOAD_CURRENT_USER_SUCCESS = 'modules/user/LOAD_CURRENT_USER_SUCCESS'
export const LOAD_CURRENT_USER_FAILURE = 'modules/user/LOAD_CURRENT_USER_FAILURE'

export const loadCurrentUserDataAction = {
  request: id => ({
    type: LOAD_CURRENT_USER_REQUEST,
    id
  }),
  success: data => ({
    type: LOAD_CURRENT_USER_SUCCESS,
    data
  }),
  failure: error => ({
    type: LOAD_CURRENT_USER_FAILURE,
    error
  })
}
