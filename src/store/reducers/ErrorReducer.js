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
  REMOVE_CART_SUCCESS,
  ADD_CART_FAIL,
  REMOVE_CART_FAIL,
} from "../constants"

const initialState = {
  productsError: null,
  cartError: null,
}

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
    case PRODUCTS_FETCH:
    case PRODUCTS_FETCH_SUCCESS:
      return produce(state, (draftState) => {
        draftState.productsError = null
      })
    case PRODUCTS_FETCH_FAIL:
      return produce(state, (draftState) => {
        draftState.productsError = action.payload.error
      })
    case CART_LOADING:
    case CART_FETCH:
    case CART_FETCH_SUCCESS:
    case ADD_CART_SUCCESS:
    case REMOVE_CART_SUCCESS:
      return produce(state, (draftState) => {
        draftState.cartError = null
      })
    case ADD_CART_FAIL:
    case REMOVE_CART_FAIL:
    case CART_FETCH_FAIL:
      return produce(state, (draftState) => {
        draftState.cartError = action.payload.error
      })

    default:
      return state
  }
}

export default ErrorReducer
