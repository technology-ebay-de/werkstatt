import { all, fork } from 'redux-saga/effects'
import loadDashboardDataSaga from './loadDashboardDataSaga'

export default function * sagas () {
  yield all([fork(loadDashboardDataSaga)])
}
