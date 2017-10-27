import { gql } from "react-apollo"

export default gql`
  query {
    products {
      id
      name
      price {
        human
        number
      }
      image {
        thumb
      }
    }
  }
`
