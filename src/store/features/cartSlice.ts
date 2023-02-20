import { Product } from "@/models/products";
import { CartItem } from "@/models/shopping-cart";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store';

export interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<Product>) => {
      const product = action.payload
      const item = state.items.find(item => item.product.id === product.id)

      if (item) {
        item.quantity++
      } else {
        state.items.push({
          product,
          quantity: 1
        })
      }
    },
    removeFromCart: (state, action:PayloadAction<Product>) => {
      const product = action.payload
      const item = state.items.find(item => item.product.id === product.id)

      if (item) {
        item.quantity--
        if (item.quantity === 0) {
          state.items = state.items.filter(item => item.product.id !== product.id)
        }
      }
    },
    removeProductFromCart: (state, action:PayloadAction<Product>) => {
      const product = action.payload
      state.items = state.items.filter(item => item.product.id !== product.id)
    }
  }
})

const cartItems = (state: RootState) => state.cart.items

export const totalCartItemsSelector = createSelector([cartItems], (cartItems) => 
  cartItems.reduce((total: number, curr: CartItem) => total += curr.quantity, 0)
)

export const totalCartPriceSelector = createSelector([cartItems], (cartItems) =>
  cartItems.reduce((total: number, curr: CartItem) => total += curr.product.price * curr.quantity, 0)
)

// export const productQtySelector = createSelector(
//   [cartItems, (cartItems, productId: number) => productId],
//   (cartItems, productId) => 
//     cartItems.find(item => item.product.id === productId)?.quantity
// )

export const { addToCart, removeFromCart, removeProductFromCart } = cartSlice.actions
export default cartSlice.reducer