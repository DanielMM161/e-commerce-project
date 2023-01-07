  import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../models";
import { CartEmptyState } from "../../models/cart.model";

export const cartSlice = createSlice({
  name: 'categories',
  initialState: CartEmptyState,
  reducers: {
    addCartItem: (state, action: {payload: {quantity: number, product: Product}, type: string}) => {      
      const {product} = action.payload
      const index = state.findIndex(value => value.product.id === product.id)

      if(index !== -1) {        
        return state.map(item => {
          if(item.product.id !== product.id) {
            return item
          }
          return {
            ...item,
            quantity: item.quantity + 1
          }
        })        
      }

      return [...state, action.payload]
    },
    deleteItem: (state, action) => {
      return state.filter(element => element.product.id !== action.payload)
    },
    updateQuantity: (state, action: {payload: {newQuantity: number, idProduct: number}, type: string}) => {
      const {newQuantity, idProduct} = action.payload

      return state.map(item => {
        if(item.product.id !== idProduct) {
          return item
        }
        return {
          ...item,
          quantity: newQuantity
        }
      })      
    }
  }
})

export const {addCartItem, deleteItem, updateQuantity} = cartSlice.actions

export default cartSlice.reducer