import { getProducts } from '../../models/products'
import Product from '../product'
import { Product as IProduct } from '../../models/products'

const ProductList = async () => {
  const products: IProduct[] = await getProducts()

  return (
    <section id="product-list" className='flex flex-col md:flex-row flex-wrap gap-2 justify-center mt-10'>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </section>
  )
}

export default ProductList
