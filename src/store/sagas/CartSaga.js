import { takeEvery, takeLatest, put, select, call } from "redux-saga/effects"
import {
  CART_FETCH,
  CART_FETCH_SUCCESS,
  CART_FETCH_FAIL,
  ADD_CART,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
  REMOVE_CART,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAIL,
} from "../constants"
import { getCartItems, addCartItem, removeCartItem } from "../../api"

function* handleCartFetch() {
  try {
    const cart = yield call(getCartItems)

    yield put({ type: CART_FETCH_SUCCESS, payload: cart })
  } catch (err) {
    yield put({ type: CART_FETCH_FAIL })
  }
}

function* handleAddCart({ payload }) {
  try {
    const response = yield call(addCartItem, payload)
    yield put({ type: ADD_CART_SUCCESS, payload })
  } catch (error) {
    yield put({ type: ADD_CART_FAIL, payload: error })
  }
}
function* handleRemoveCart({ payload }) {
  try {
    const response = yield call(removeCartItem, payload)
    yield put({ type: REMOVE_CART_SUCCESS, payload })
  } catch (error) {
    yield put({ type: REMOVE_CART_FAIL, payload: error })
  }
}

// Watcher saga
export default function* root() {
  yield takeLatest(ADD_CART, handleAddCart)
  yield takeLatest(CART_FETCH, handleCartFetch)
  yield takeLatest(REMOVE_CART, handleRemoveCart)
}
