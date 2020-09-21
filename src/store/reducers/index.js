import { combineReducers } from "redux"
import ProductReducer from "./ProductsReducer"
import CartItemsReducer from "./CartItemsReducer"

const rootReducer = combineReducers({
  products: ProductReducer,
  cartItems: CartItemsReducer,
})

export default rootReducer
