import { put, takeLatest } from 'redux-saga/effects'
import { loadSketchpadDataAction, LOAD_SKETCHPAD_REQUEST } from '../actions'
import { fetchSketchpadData } from '../utils'

export function * loadSketchpadData ({ id }) {
  let data
  try {
    data = fetchSketchpadData(id)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn('error caught loading sketch pad data', error)
    }
    loadSketchpadDataAction.failure(error)
  }
  if (data === null) {
    return
  }
  yield put(loadSketchpadDataAction.success(data))
}
export default function * () {
  yield takeLatest(LOAD_SKETCHPAD_REQUEST, loadSketchpadData)
}
