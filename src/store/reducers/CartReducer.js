import produce from "immer"

import {
  CART_FETCH_SUCCESS,
  ADD_CART_SUCCESS,
  REMOVE_CART_SUCCESS,
  ADD_CART,
  REMOVE_CART,
} from "../constants"

const initialState = {
  cartItems: [],
  loadingCartItemId: null,
}

const CartReducer = produce((draft, action) => {
  if ([REMOVE_CART, ADD_CART].includes(action.type)) {
    draft.loadingCartItemId = action.payload.id
  } else {
    draft.loadingCartItemId = null
  }

  switch (action.type) {
    case CART_FETCH_SUCCESS:
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
  }
}, initialState)

export default CartReducer
