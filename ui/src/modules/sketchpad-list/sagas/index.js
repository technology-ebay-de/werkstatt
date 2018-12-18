import { all, fork } from 'redux-saga/effects'
import loadSketchpadListDataSaga from './loadSketchpadListDataSaga'

export default function * sagas () {
  yield all([fork(loadSketchpadListDataSaga)])
}
