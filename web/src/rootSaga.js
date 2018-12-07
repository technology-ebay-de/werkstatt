import { all, fork } from 'redux-saga/effects'
import { sagas as authSagas } from './modules/auth'
import { sagas as sketchpadListSagas } from './modules/sketchpad-list'
import { sagas as sketchpadSagas } from './pages/sketchpad'

export default function * rootSaga () {
  const sagas = [
    authSagas,
    sketchpadListSagas,
    sketchpadSagas
  ]

  yield all(sagas.map(saga => fork(saga)))
}
