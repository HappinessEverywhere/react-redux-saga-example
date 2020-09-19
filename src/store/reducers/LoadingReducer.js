import produce from "immer"

import {
  PRODUCTS_LOADING,
  PRODUCTS_FETCH,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  CART_LOADING,
  CART_FETCH,
  CART_FETCH_SUCCESS,
  CART_FETCH_FAIL,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAIL,
} from "../constants"

const initialState = {
  productsLoading: false,
  cartLoading: false,
}

const LoadingReducer = produce((draft, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      draft.productsLoading = true
      break
    case PRODUCTS_FETCH:
    case PRODUCTS_FETCH_SUCCESS:
    case PRODUCTS_FETCH_FAIL:
      draft.productsLoading = false
      break
    case CART_FETCH:
    case CART_LOADING:
      draft.cartLoading = true
      break
    case CART_FETCH:
    case CART_FETCH_SUCCESS:
    case CART_FETCH_FAIL:
    case ADD_CART_SUCCESS:
    case ADD_CART_FAIL:
    case REMOVE_CART_SUCCESS:
    case REMOVE_CART_FAIL:
      draft.cartLoading = false
      break
  }
}, initialState)

export default LoadingReducer
