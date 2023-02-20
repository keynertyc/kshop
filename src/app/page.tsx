// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// const inter = Inter({ subsets: ['latin'] })

import ProductList from '../components/product-list'

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ProductList />
    </>
  )
}
