import React from "react"
import { createStore } from "redux"
import { ApolloProvider as Provider } from "react-apollo"

import Routes from "./Routes"

import AppReducer from "./reducers"

import { apolloClient } from "./apollo"

class App extends React.Component {
  store = createStore(AppReducer)

  render() {
    return (
      <Provider store={this.store} client={apolloClient}>
        <Routes />
      </Provider>
    )
  }
}

export default App
