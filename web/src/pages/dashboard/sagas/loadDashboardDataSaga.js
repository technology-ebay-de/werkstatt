import { put, takeLatest } from 'redux-saga/effects'
import { loadDashboardDataAction, LOAD_DASHBOARD_REQUEST } from '../actions'
import { fetchDashboardData } from '../utils'

export function * loadDashboardData () {
  let data
  try {
    data = fetchDashboardData()
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn('error caught loading dashboard data', error)
    }
    loadDashboardDataAction.failure(error)
  }
  if (data === null) {
    return
  }
  yield put(loadDashboardDataAction.success(data))
}
export default function * () {
  yield takeLatest(LOAD_DASHBOARD_REQUEST, loadDashboardData)
}
