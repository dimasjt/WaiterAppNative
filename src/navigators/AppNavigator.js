import React from "react"
import { addNavigationHelpers, StackNavigator } from "react-navigation"
import { connect } from "react-redux"

import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"

import MainDrawer from "./MainDrawer"

const SignedOut = StackNavigator({
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
}, {
  initialRouteName: "Login",
})

export const AppNavigator = StackNavigator({
  SignedOut: {
    screen: SignedOut,
  },
  SignedIn: {
    screen: MainDrawer,
  },
}, {
  headerMode: "none",
  initialRouteName: "SignedOut",
})

const AppWithNavigationState = ({ dispatch, nav, auth }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = (state) => ({
  nav: state.nav,
  auth: state.auth,
})

export default connect(mapStateToProps)(AppWithNavigationState)
