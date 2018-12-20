import { put, takeLatest, call } from 'redux-saga/effects'
import { loadCurrentUserDataAction, LOAD_CURRENT_USER_REQUEST } from '../actions'
import { fetchCurrentUserData } from '../utils'

export function * loadSCurrentUserData ({ id }) {
  let data
  try {
    data = yield call(fetchCurrentUserData, id)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn('error caught loading sketch pad data', error)
    }
    loadCurrentUserDataAction.failure(error)
  }
  if (data === null) {
    return
  }
  yield put(loadCurrentUserDataAction.success(data))
}
export default function * () {
  yield takeLatest(LOAD_CURRENT_USER_REQUEST, loadSCurrentUserData)
}
