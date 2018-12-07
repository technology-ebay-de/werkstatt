import { all, fork } from 'redux-saga/effects'
import loadSketchpadDataSaga from './loadSketchpadDataSaga'

export default function * sagas () {
  yield all([fork(loadSketchpadDataSaga)])
}
