import produce from "immer"

import {
  CART_FETCH_SUCCESS,
  ADD_CART_SUCCESS,
  REMOVE_CART_SUCCESS,
} from "../constants"

const CartReducer = produce((draft, action) => {
  switch (action.type) {
    case CART_FETCH_SUCCESS:
      draft = action.payload
      break
    case ADD_CART_SUCCESS:
      draft.push(action.payload)
      break
    case REMOVE_CART_SUCCESS:
      return draft.filter((item) => item.id !== action.payload)
  }
}, [])

export default CartReducer
