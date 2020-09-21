import { PRODUCTS_FETCH_SUCCESS } from "../constants"

const initialState = {
  products: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_FETCH_SUCCESS:
      return { ...state, products: action.payload }

    default:
      return state
  }
}
