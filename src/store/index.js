import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import rootReducers from "../reducers"
import { apolloMiddleware } from "../apollo"

const middleware = applyMiddleware(
  thunk,
  apolloMiddleware,
)

const store = createStore(rootReducers, {}, middleware)

export default store
