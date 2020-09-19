import produce from "immer"

import {
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  CART_FETCH_SUCCESS,
  CART_FETCH_FAIL,
  ADD_CART_SUCCESS,
  REMOVE_CART_SUCCESS,
  ADD_CART_FAIL,
  REMOVE_CART_FAIL,
} from "../constants"

const initialState = {
  productsError: null,
  cartError: null,
}

// Immer becomes very helpful while dealing with nested objects.

const ErrorReducer = produce((draft, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS:
      draft.productsError = null
      break
    case PRODUCTS_FETCH_FAIL:
      draft.productsError = action.payload.error
      break

    case CART_FETCH_SUCCESS:
    case ADD_CART_SUCCESS:
    case REMOVE_CART_SUCCESS:
      draft.cartError = null
      break
    case CART_FETCH_FAIL:
    case ADD_CART_FAIL:
    case REMOVE_CART_FAIL:
      draft.cartError = action.payload.error
      break
  }
}, initialState)

export default ErrorReducer
