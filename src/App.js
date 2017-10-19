import Expo from "expo"
import React from "react"
import { createStore } from "redux"
import { ApolloProvider as Provider } from "react-apollo"

import { AppNavigator } from "./navigators/AppNavigator"
import AppReducer from "./reducers"

import { apolloClient } from "./apollo"

class App extends React.Component {
  state = { isReady: false }
  store = createStore(AppReducer)

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      MaterialCommunityIcons: require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf"),
    })

    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }

    return (
      <Provider store={this.store} client={apolloClient}>
        <AppNavigator />
      </Provider>
    )
  }
}

Expo.registerRootComponent(App)
