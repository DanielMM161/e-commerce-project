  import { createSlice } from "@reduxjs/toolkit";
import { CartEmptyState } from "../../models/cart.model";

export const cartSlice = createSlice({
  name: 'categories',
  initialState: CartEmptyState,
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload]
    },
    deleteItem: (state, action) => {
      return state.filter(element => element.product.id != action.payload)
    },
    updateQuantity: (state, action: {payload: {newQuantity: number, idProduct: number}, type: string}) => {
      const {newQuantity, idProduct} = action.payload
      state.forEach(element => {
        let {product, quantity} = element
        if(product.id === idProduct) {
          quantity = newQuantity
        }
      })
      return state
    }
  }
})

export const {addItem, deleteItem, updateQuantity} = cartSlice.actions

export default cartSlice.reducer