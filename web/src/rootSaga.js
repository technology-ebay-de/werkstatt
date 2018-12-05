import { all, fork } from 'redux-saga/effects'
import { sagas as sketchPadSagas } from './pages/sketchpad'
import { sagas as userSagas } from './modules/user'

export default function * rootSaga () {
  const sagas = [
    sketchPadSagas,
    userSagas
  ]

  yield all(sagas.map(saga => fork(saga)))
}
