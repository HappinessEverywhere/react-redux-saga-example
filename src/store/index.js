import { createStore } from "redux"
import Reducer from "./reducers"

const configureStore = () => {
  const store = createStore(Reducer)
  return store
}

export default configureStore
