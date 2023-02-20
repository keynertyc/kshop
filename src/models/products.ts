import { client, GET_PRODUCTS } from '../libraries/graphql'

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
    query: GET_PRODUCTS
  })

  return data.products
}
