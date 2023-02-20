import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const client = new ApolloClient({
  uri: `${process.env.REACT_APP_HYGRAPH_API_URL}/v2/${process.env.REACT_APP_HYGRAPH_API_ID}/master`,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_HYGRAPH_API_KEY}`,
  },
})

export const GET_PRODUCTS = gql`
  query products {
    products {
      id
      images {
        id
        height
        url(transformation: {})
        width
      }
      name
      price
    }
  }
`
