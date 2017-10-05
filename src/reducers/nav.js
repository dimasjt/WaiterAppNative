import { NavigationActions } from "react-navigation"

import { AppNavigator } from "../navigators/AppNavigator"

const loginAction = AppNavigator.router.getActionForPathAndParams("SignedOut")
const initialState = AppNavigator.router.getStateForAction(loginAction)

function nav(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  return nextState || state
  // let nextState
  // switch(action.type) {
  //   case "Login":
  //     nextState = AppNavigator.router.getStateForAction(
  //       NavigationActions.back(),
  //       state,
  //     )
  //   case "Register":
  //     nextState = AppNavigator.router.getStateForAction(
  //       NavigationActions.navigate({ routeName: "Register" }),
  //       state,
  //     )
  //   default:
  //     nextState = AppNavigator.router.getStateForAction(action, state)
  //
  //   return nextState || state;
  // }
}

export default nav
