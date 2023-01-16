import { createSlice } from "@reduxjs/toolkit";

import { cartEmptyState, IAddCart } from "../../models/cart.model";

export const cartSlice = createSlice({
  name: 'categories',
  initialState: cartEmptyState,
  reducers: {
    addCartItem: (state, action: {payload: IAddCart, type: string}) => {      
      const {product} = action.payload
      const index = state.findIndex(value => value.product.id === product.id)
      
      if(index !== -1) {
        state.forEach(item => {
          if(item.product.id === product.id) {
            item.quantity = item.quantity + 1
          }
        })        
      } else {
        state.push(action.payload)
      }
      localStorage.setItem('cart', JSON.stringify(state))      
    },
    deleteItem: (state, action) => {      
      const newState = state.filter(element => element.product.id !== action.payload)
     // localStorage.setItem('cart', JSON.stringify(newState))
      return newState   
    },
    updateQuantity: (state, action: {payload: {newQuantity: number, idProduct: number}, type: string}) => {
      const {newQuantity, idProduct} = action.payload
      state.forEach(item => {
        if(item.product.id === idProduct) {
          item.quantity = newQuantity
        }
      })      
     // localStorage.setItem('cart', JSON.stringify(state))      
    },
    getCart: (state) => {
      // const newState = JSON.parse(localStorage.getItem('cart') ?? "null")
      // if(newState != null) {
      //   return newState
      // }
      // return state     
    }
  }
})

export const {addCartItem, deleteItem, updateQuantity, getCart} = cartSlice.actions

export default cartSlice.reducer