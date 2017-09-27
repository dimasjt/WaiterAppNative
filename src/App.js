import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"

import AppWithNavigationState, { AppNavigator } from "./navigators/AppNavigator"
import AppReducer from "./reducers"

class App extends React.Component {
  store = createStore(AppReducer)

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default App
