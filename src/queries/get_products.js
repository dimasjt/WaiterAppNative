import { gql } from "react-apollo"

export default gql`
  query {
    products {
      id
      name
    }
  }
`
