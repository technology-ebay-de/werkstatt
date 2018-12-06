import { all, fork } from 'redux-saga/effects'
import { sagas as authSagas } from './modules/auth'
import { sagas as sketchPadSagas } from './pages/sketchpad'
import { sagas as dashboardSagas } from './pages/dashboard'

export default function * rootSaga () {
  const sagas = [
    authSagas,
    sketchPadSagas,
    dashboardSagas
  ]

  yield all(sagas.map(saga => fork(saga)))
}
