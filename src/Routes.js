import React from "react"
import { NativeRouter, Route, Switch } from "react-router-native"

import LoginScreen from "./screens/auth/LoginScreen"
import RegisterScreen from "./screens/auth/RegisterScreen"

const Routes = () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </Switch>
  </NativeRouter>
)

export default Routes
