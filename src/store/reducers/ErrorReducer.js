import produce from "immer"

import {
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  CART_ITEMS_FETCH_SUCCESS,
  CART_ITEMS_FETCH_FAIL,
  ADD_CART_SUCCESS,
  ADD_CART_FAIL,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAIL,
} from "../constants"

const initialState = {
  productsError: false,
  cartError: false,
}

const ErrorReducer = produce((draft, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS:
      draft.productsError = false
      break
    case PRODUCTS_FETCH_FAIL:
      draft.productsError = true
      break
    case CART_ITEMS_FETCH_SUCCESS:
    case ADD_CART_SUCCESS:
    case REMOVE_CART_SUCCESS:
      draft.cartError = false
      break
    case CART_ITEMS_FETCH_FAIL:
    case ADD_CART_FAIL:
    case REMOVE_CART_FAIL:
      draft.cartError = true
      break
  }
}, initialState)

export default ErrorReducer
