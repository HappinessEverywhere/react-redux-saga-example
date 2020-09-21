import { takeLatest, call, put, select } from "redux-saga/effects"

import {
  PRODUCTS_FETCH,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
} from "../constants"

import { getProducts } from "../../api"

// Worker saga
function* handleProductsFetch() {
  try {
    // const state = yield select((state) => {
    //   return state.products
    // })

    // console.log(state)
    const response = yield call(getProducts)
    yield put({ type: PRODUCTS_FETCH_SUCCESS, payload: response.products })
  } catch (err) {
    yield put({ type: PRODUCTS_FETCH_FAIL, payload: err })
  }
}

// Watcher saga
function* watcherSaga() {
  yield takeLatest(PRODUCTS_FETCH, handleProductsFetch)
}

export default watcherSaga
