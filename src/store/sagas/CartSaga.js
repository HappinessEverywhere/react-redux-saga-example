import { takeLatest, call, put, select } from "redux-saga/effects"

import {
  CART_ITEMS_FETCH,
  CART_ITEMS_FETCH_SUCCESS,
  CART_ITEMS_FETCH_FAIL,
} from "../constants"

import { getCartItems } from "../../api"

// Worker saga
function* handleCartItemsFetch() {
  try {
    const response = yield call(getCartItems)
    yield put({ type: CART_ITEMS_FETCH_SUCCESS, payload: response.cartItems })
  } catch (err) {
    yield put({ type: CART_ITEMS_FETCH_FAIL, payload: err })
  }
}

// Watcher saga
function* watcherSaga() {
  yield takeLatest(CART_ITEMS_FETCH, handleCartItemsFetch)
}

export default watcherSaga
