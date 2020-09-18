import produce from "immer"

import {
  CART_FETCH_SUCCESS,
  ADD_CART_SUCCESS,
  REMOVE_CART_SUCCESS,
} from "../constants"

const CartReducer = (state = [], action) => {
  switch (action.type) {
    case CART_FETCH_SUCCESS:
      return action.payload
    case ADD_CART_SUCCESS:
      return produce(state, (draftState) => {
        console.log("Payload: ", action.payload)
        draftState.push(action.payload)
      })
    case REMOVE_CART_SUCCESS:
      return produce(state, (draftState) => {
        draftState = draftState.filter((item) => item !== action.payload)
      })
    default:
      return state
  }
}

export default CartReducer
