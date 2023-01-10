  import { createSlice } from "@reduxjs/toolkit";
import { cartEmptyState, IAddCart } from "../../models/cart.model";

export const cartSlice = createSlice({
  name: 'categories',
  initialState: cartEmptyState,
  reducers: {
    addCartItem: (state, action: {payload: IAddCart, type: string}) => {
      let newState: any
      const {product} = action.payload
      const index = state.findIndex(value => value.product.id === product.id)
      
      if(index !== -1) {
        newState = state.map(item => {
          if(item.product.id !== product.id) {
            return item
          }
          return {
            ...item,
            quantity: item.quantity + 1
          }
        })        
      } else {
        newState = [...state, action.payload]
      }
      localStorage.setItem('cart', JSON.stringify(newState))
      return newState
    },
    deleteItem: (state, action) => {
      let newState = state.filter(element => element.product.id !== action.payload)
      localStorage.setItem('cart', JSON.stringify(newState))
      return newState
    },
    updateQuantity: (state, action: {payload: {newQuantity: number, idProduct: number}, type: string}) => {
      const {newQuantity, idProduct} = action.payload
      let newState = state.map(item => {
        if(item.product.id !== idProduct) {
          return item
        }
        return {
          ...item,
          quantity: newQuantity
        }
      })      

      localStorage.setItem('cart', JSON.stringify(newState))
      return newState  
    },
    getCart: (state) => {
      const newState = JSON.parse(localStorage.getItem('cart') ?? "null")
      if(newState != null) {
        return newState
      }
      return state
    }
  }
})

export const {addCartItem, deleteItem, updateQuantity, getCart} = cartSlice.actions

export default cartSlice.reducer