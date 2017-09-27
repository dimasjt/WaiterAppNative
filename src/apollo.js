import { ApolloClient, createNetworkInterface } from "react-apollo"

const networkInterface = createNetworkInterface({
  uri: "http://0.0.0.0/api/graphql",
})

export const apolloClient = new ApolloClient({ networkInterface })
export const apolloReducer = apolloClient.reducer()
export const apolloMiddleware = apolloClient.middleware()
