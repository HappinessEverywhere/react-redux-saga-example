import { PRODUCTS_FETCH_SUCCESS } from "../constants"

export default (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS:
      return action.payload

    default:
      return state
  }
}
