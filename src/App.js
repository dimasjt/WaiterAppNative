import React from "react"
import { createStore } from "redux"
import { ApolloProvider as Provider } from "react-apollo"

import { AppNavigator } from "./navigators/AppNavigator"
import AppReducer from "./reducers"

import { apolloClient } from "./apollo"

class App extends React.Component {
  store = createStore(AppReducer)

  render() {
    return (
      <Provider store={this.store} client={apolloClient}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App
