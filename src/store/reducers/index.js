import { combineReducers } from "redux"
import ProductReducer from "./ProductsReducer"
import CartItemsReducer from "./CartItemsReducer"

const rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartItemsReducer,
})

export default rootReducer
