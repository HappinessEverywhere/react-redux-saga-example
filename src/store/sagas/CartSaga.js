import { takeLatest, call, put, select } from "redux-saga/effects"

import {
  CART_ITEMS_FETCH,
  CART_ITEMS_FETCH_SUCCESS,
  CART_ITEMS_FETCH_FAIL,
  ADD_CART,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
  REMOVE_CART,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAIL,
} from "../constants"

import { getCartItems, addCartItem, removeCartItem } from "../../api"

// Worker saga
function* handleCartItemsFetch() {
  try {
    const response = yield call(getCartItems)
    yield put({ type: CART_ITEMS_FETCH_SUCCESS, payload: response.cartItems })
  } catch (err) {
    yield put({ type: CART_ITEMS_FETCH_FAIL, payload: err })
  }
}
function* handleAddCartItem({ payload }) {
  try {
    const response = yield call(addCartItem)
    yield put({ type: ADD_CART_SUCCESS, payload: payload })
  } catch (err) {
    yield put({ type: ADD_CART_FAIL, payload: err })
  }
}

function* handleRemoveCartItem({ payload }) {
  try {
    const response = yield call(removeCartItem)
    yield put({ type: REMOVE_CART_SUCCESS, payload: payload })
  } catch (err) {
    yield put({ type: REMOVE_CART_FAIL, payload: err })
  }
}

// Watcher saga
function* watcherSaga() {
  yield takeLatest(CART_ITEMS_FETCH, handleCartItemsFetch)
  yield takeLatest(ADD_CART, handleAddCartItem)
  yield takeLatest(REMOVE_CART, handleRemoveCartItem)
}

export default watcherSaga
