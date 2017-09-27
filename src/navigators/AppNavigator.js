import React from "react"
import { addNavigationHelpers, StackNavigator } from "react-navigation"
import { connect } from "react-redux"

import LoginScreen from "../components/screens/LoginScreen"
import RegisterScreen from "../components/screens/RegisterScreen"

import MainDrawer from "./MainDrawer"

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  MainDrawer: { screen: MainDrawer },
})

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)
