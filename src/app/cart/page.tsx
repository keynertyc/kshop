'use client'
import { RootState } from "@/store/store"
import { useAppSelector } from "@/store/store"
import CartSummary from "@/components/cart-summary"
import Image from 'next/image'
import CartItem from "@/components/cart-item"

const Cart = () => {
  const cart = useAppSelector((state: RootState) => state.cart.items)

  return (
    <div className="mt-10">
      {cart.length === 0 && (
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
      )}
      {cart.length > 0 && (
        <div className="flex flex-col md:flex-row gap-2">
          <div className="md:w-2/3 border-gray-100 rounded-xl border-2 p-5 shadow-gray-200 shadow-2xl">
            <ul className=" space-y-6">
              {cart.map((item) => (
                <li key={item.product.id}>
                  <CartItem item={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/3 border-gray-100 rounded-xl border-2 p-5 shadow-gray-200 shadow-2xl h-60">
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
