import { all, fork } from 'redux-saga/effects'
import loadCurrentUserDataSaga from './loadCurrentUserDataSaga'

export default function * sagas () {
  yield all([fork(loadCurrentUserDataSaga)])
}
