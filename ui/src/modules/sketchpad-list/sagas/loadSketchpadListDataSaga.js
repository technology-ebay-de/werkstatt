import { put, takeLatest, call } from 'redux-saga/effects'
import { loadSketchpadListDataAction, LOAD_SKETCHPAD_LIST_REQUEST } from '../actions'
import { fetchSketchpadListData } from '../utils'

export function * loadSketchpadListData ({ limit = null }) {
  let data
  try {
    data = yield call(fetchSketchpadListData, { limit })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn('error caught loading sketchpad list data', error)
    }
    loadSketchpadListDataAction.failure(error)
  }
  if (data === null) {
    return
  }
  yield put(loadSketchpadListDataAction.success(data))
}
export default function * () {
  yield takeLatest(LOAD_SKETCHPAD_LIST_REQUEST, loadSketchpadListData)
}
