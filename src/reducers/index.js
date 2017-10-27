import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

import auth from "./auth"
import { apolloReducer as apollo } from "../apollo"

const AppReducer = combineReducers({
  auth,
  form,
  apollo,
})

export default AppReducer
