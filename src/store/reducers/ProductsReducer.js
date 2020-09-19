import produce from "immer"

import { PRODUCTS_FETCH_SUCCESS } from "../constants"

const ProductsReducer = produce((draft, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS:
      return action.payload
  }
}, [])

export default ProductsReducer
