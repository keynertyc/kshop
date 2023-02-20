import Image from 'next/image'
import { useAppDispatch } from '@/store/store'
import { addToCart, removeFromCart, removeProductFromCart } from '@/store/features/cartSlice'
import { CartItem } from '../../models/shopping-cart'

interface Props {
  item: CartItem
}

const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <Image
          src={item.product.images[0].url}
          alt={item.product.name}
          className="md:w-24 md:h-24 w-14 h-14"
          width={100}
          height={100}
          priority
        />
        <div className="ml-2">
          <h3 className="text-sm md:text-lg font-semibold">{item.product.name}</h3>
          <p className="text-xs md:text-sm font-semibold">${item.product.price}</p>
          <p className="hidden md:flex text-xs text-gray-300">ID {item.product.id}</p>
          <button className="p-1" onClick={() => dispatch(removeProductFromCart(item.product))}>
            <svg className="fill-red-500" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M261 936q-24 0-42-18t-18-42V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm106-146h60V391h-60v399Zm166 0h60V391h-60v399Z"/></svg>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <button className="bg-blue-500 text-white rounded-md p-1" onClick={() => dispatch(removeFromCart(item.product))}>
          <svg className="fill-white"  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M200 606v-60h560v60H200Z"/></svg>
        </button>
        <p className="text-lg font-semibold">{item.quantity}</p>
        <button className="bg-blue-500 text-white rounded-md p-1" onClick={() => dispatch(addToCart(item.product))}>
          <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z"/></svg>
        </button>
        <p className="text-lg font-semibold">${item.product.price * item.quantity}</p>
      </div>
    </div>
  )
}

export default CartItem