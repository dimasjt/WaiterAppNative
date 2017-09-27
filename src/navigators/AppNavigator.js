import React from "react"
import { addNavigationHelpers, StackNavigator } from "react-navigation"
import { connect } from "react-redux"

import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"

import MainDrawer from "./MainDrawer"

export const AppNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login",
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      title: "Register",
    },
  },
  MainDrawer: {
    screen: MainDrawer,
  },
})

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)
