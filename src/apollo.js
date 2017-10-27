import { ApolloClient, createNetworkInterface } from "react-apollo"
import { AsyncStorage } from "react-native"

const networkInterface = createNetworkInterface({
  uri: "https://waiterapp-staging.herokuapp.com/api/graphql",
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
