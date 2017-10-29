import Expo from "expo"
import React from "react"
import { StatusBar, View } from "react-native"
import { ApolloProvider as Provider } from "react-apollo"

import { AppNavigator } from "./navigators/AppNavigator"

import { apolloClient } from "./apollo"
import store from "./store"

class App extends React.Component {
  state = { isReady: false }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    })

    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }

    return (
      <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <Provider store={store} client={apolloClient}>
          <AppNavigator />
        </Provider>
      </View>
    )
  }
}

Expo.registerRootComponent(App)
