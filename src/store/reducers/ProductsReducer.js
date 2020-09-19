import produce from "immer"

import {
  PRODUCTS_FETCH_SUCCESS,
  ADD_PRODUCTS_SUCCESS,
  REMOVE_PRODUCTS_SUCCESS,
} from "../constants"

const ProductsReducer = produce((draft, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS:
      return action.payload
  }
}, [])

export default ProductsReducer
