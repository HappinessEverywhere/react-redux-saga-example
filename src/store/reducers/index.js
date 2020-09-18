import { combineReducers } from "redux"

import ErrorReducer from "./ErrorReducer"
import CartReducer from "./CartReducer"
import LoadingReducer from "./LoadingReducer"
import ProductsReducer from "./ProductsReducer"

const rootReducer = combineReducers({
  isLoading: LoadingReducer,
  cart: CartReducer,
  products: ProductsReducer,
  error: ErrorReducer,
})

export default rootReducer
