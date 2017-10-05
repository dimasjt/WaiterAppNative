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
})

export const AppNavigator = StackNavigator({
  SignedIn: {
    screen: MainDrawer,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
  SignedOut: {
    screen: SignedOut,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
}, {
  headerMode: "none",
  mode: "modal",
})

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = (state) => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)
