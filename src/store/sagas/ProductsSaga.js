import { takeEvery, put, select, call } from "redux-saga/effects"
import {
  PRODUCTS_FETCH,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCTS_LOADING,
} from "../constants"
import { getProducts } from "../../api"

function* handleProductsFetch() {
  try {
    // We can use select to select a part of state. If yield select is called without paranthesis, the effect will be resolved with the whole state
    // const page = yield select((state) => state.nextPage)
    yield put({ type: PRODUCTS_LOADING })
    const response = yield call(getProducts)

    yield put({ type: PRODUCTS_FETCH_SUCCESS, payload: response.products })
  } catch (err) {
    yield put({ type: PRODUCTS_FETCH_FAIL })
  }
}

// Watcher saga
function* watcherSaga() {
  yield takeEvery(PRODUCTS_FETCH, handleProductsFetch)
}

export default watcherSaga
