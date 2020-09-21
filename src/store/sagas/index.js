import { all } from "redux-saga/effects"
import ProductsSaga from "./ProductsSaga"
import CartSaga from "./CartSaga"

export default function* rootSaga() {
  yield all([ProductsSaga(), CartSaga()])
}
