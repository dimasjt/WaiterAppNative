import { ApolloClient, createNetworkInterface } from "react-apollo"

const networkInterface = createNetworkInterface({
  uri: "http://10.0.2.2:3000/api/graphql",
})

export const apolloClient = new ApolloClient({ networkInterface })
export const apolloReducer = apolloClient.reducer()
export const apolloMiddleware = apolloClient.middleware()
