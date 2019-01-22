import { all, fork } from 'redux-saga/effects'
import loadSketchPadDataSaga from './loadSketchPadDataSaga'

export default function * sagas () {
  yield all([fork(loadSketchPadDataSaga)])
}
