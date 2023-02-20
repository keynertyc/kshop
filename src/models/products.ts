import { gql } from '@apollo/client'
import { client } from '../services/graphql'

interface Image {
  id: number
  height: number
  url: string
  width: number
}

export interface Product {
  id: number
  name: string
  price: number
  images: Image[]
}

export const getProducts = async () => {
  const { data } = await client.query({
    query: gql`
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
  })

  return data.products
}
