import produce from "immer"

import {
  PRODUCTS_FETCH_SUCCESS,
  ADD_PRODUCTS_SUCCESS,
  REMOVE_PRODUCTS_SUCCESS,
} from "../constants"

const ProductsReducer = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS:
      console.log(action, "From products reducer")
      return action.payload

    default:
      return state
  }
}

export default ProductsReducer
