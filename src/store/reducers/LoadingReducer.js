import produce from "immer"

import {
  PRODUCTS_FETCH,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
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

const initialState = {
  productsLoading: false,
  cartLoading: false,
}

const LoadingReducer = produce((draft, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH:
      draft.productsLoading = true
      break
    case PRODUCTS_FETCH_SUCCESS:
    case PRODUCTS_FETCH_FAIL:
      draft.productsLoading = false
      break
    case CART_ITEMS_FETCH:
    case ADD_CART:
    case REMOVE_CART:
      draft.cartLoading = true
      break
    case CART_ITEMS_FETCH_SUCCESS:
    case CART_ITEMS_FETCH_FAIL:
    case ADD_CART_SUCCESS:
    case ADD_CART_FAIL:
    case REMOVE_CART_SUCCESS:
    case REMOVE_CART_FAIL:
      draft.cartLoading = false
      break
  }
}, initialState)

export default LoadingReducer
