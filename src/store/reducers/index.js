import { combineReducers } from "redux"
import ProductReducer from "./ProductsReducer"
import CartItemsReducer from "./CartItemsReducer"
import LoadingReducer from "./LoadingReducer"
import ErrorReducer from "./ErrorReducer"

const rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartItemsReducer,
  loadingStatus: LoadingReducer,
  error: ErrorReducer,
})

export default rootReducer
