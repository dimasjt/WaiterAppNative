import { ApolloClient, createNetworkInterface } from "react-apollo"
import { AsyncStorage } from "react-native"

const networkInterface = createNetworkInterface({
  uri: "http://10.0.2.2:3000/api/graphql",
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
