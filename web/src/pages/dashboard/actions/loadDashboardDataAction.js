export const LOAD_DASHBOARD_REQUEST = 'pages/dashboard/LOAD_DASHBOARD_REQUEST'
export const LOAD_DASHBOARD_SUCCESS = 'pages/dashboard/LOAD_DASHBOARD_SUCCESS'
export const LOAD_DASHBOARD_FAILURE = 'pages/dashboard/LOAD_DASHBOARD_FAILURE'

export const loadDashboardDataAction = {
  request: () => ({
    type: LOAD_DASHBOARD_REQUEST
  }),
  success: data => ({
    type: LOAD_DASHBOARD_SUCCESS,
    data
  }),
  failure: error => ({
    type: LOAD_DASHBOARD_FAILURE,
    error
  })
}
