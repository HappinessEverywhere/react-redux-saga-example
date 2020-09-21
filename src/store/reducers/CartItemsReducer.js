import produce from "immer"

import {
  CART_ITEMS_FETCH_SUCCESS,
  ADD_CART_SUCCESS,
  REMOVE_CART_SUCCESS,
} from "../constants"

const initialState = {
  cartItems: [],
  addionalInfo: "",
}

const CartReducer = produce((draft, action) => {
  switch (action.type) {
    case CART_ITEMS_FETCH_SUCCESS:
      draft.cartItems = action.payload
      break

    case ADD_CART_SUCCESS:
      draft.cartItems.push(action.payload)
      break
    case REMOVE_CART_SUCCESS:
      draft.cartItems = draft.cartItems.filter(
        (item) => item.id !== action.payload.id
      )
      break

    default:
      return draft
  }
}, initialState)

export default CartReducer
