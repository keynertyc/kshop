'use client'
import { useAppSelector } from '@/store/store'
import { RootState } from "@/store/store"

const CartSummary = () => {
  const cart = useAppSelector((state: RootState) => state.cart.items)

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Cart Summary</h2>
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm font-semibold">Subtotal</p>
        <p className="text-sm font-semibold">${cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm font-semibold">Shipping</p>
        <p className="text-sm font-semibold">$0</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm font-semibold">Tax</p>
        <p className="text-sm font-semibold">$0</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm font-semibold">Total</p>
        <p className="text-sm font-semibold">${cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}</p>
      </div>
      <button className="bg-blue-500 text-white rounded-md p-2">Checkout</button>
    </div>
  )
}

export default CartSummary