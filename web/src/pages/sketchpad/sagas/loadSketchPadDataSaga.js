import { put, takeLatest } from 'redux-saga/effects'
import { loadSketchPadDataAction, LOAD_SKETCH_PAD_REQUEST } from '../actions'
import { fetchSketchPadData } from '../utils'

export function * loadSketchPadData ({ id }) {
  let data
  try {
    data = fetchSketchPadData(id)
    console.log({ data })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn('error caught loading sketch pad data', error)
    }
    loadSketchPadDataAction.failure(error)
  }
  if (data === null) {
    return
  }
  yield put(loadSketchPadDataAction.success(data))
}
export default function * () {
  yield takeLatest(LOAD_SKETCH_PAD_REQUEST, loadSketchPadData)
}
