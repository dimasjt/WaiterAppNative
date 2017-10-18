import { ApolloClient, createNetworkInterface } from "react-apollo"
import { AsyncStorage, Platform } from "react-native"

const host = Platform.OS === "ios" ? "0.0.0.0" : "10.0.2.2"

const networkInterface = createNetworkInterface({
  uri: `http://${host}:3000/api/graphql`,
})

networkInterface.use([{
  async applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }

    const token = await AsyncStorage.getItem("token")
    req.options.headers.authorization = token ? `Bearer ${token}` : null

    next()
  },
}])

export const apolloClient = new ApolloClient({ networkInterface })
export const apolloReducer = apolloClient.reducer()
export const apolloMiddleware = apolloClient.middleware()
