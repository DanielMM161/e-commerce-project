import {createSlice, current } from "@reduxjs/toolkit";
import { productsInitialState, Product } from "../../models";
import { 
    fetchAllProducts, 
    fetchSingleProduct, 
    deleteProduct, 
    createProduct, 
    updateProduct, 
    fetchProductsByCategory
} from "../../services";

export const productsSlice = createSlice({
    name: 'products',
    initialState: productsInitialState,
    reducers: {
    },
    extraReducers: (build) => {
         /** pending */
        build.addCase(fetchAllProducts.pending , (state) => {
            state.isLoading = true
            state.product = null
        })
        build.addCase(createProduct.pending , (state) => {
            state.isLoading = true
        })
        build.addCase(fetchSingleProduct.pending , (state) => {
            state.isLoading = true
            state.product = null
        })
        build.addCase(updateProduct.pending , (state) => {
            state.isLoading = true            
        })
        build.addCase(fetchProductsByCategory.pending, (state) => {
            state.isLoading = true
        })
        build.addCase(deleteProduct.pending, (state) => {                                   
            state.isLoading = true
        })
        /** fulfilled */
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {            
            state.isLoading = false
            state.products = action.payload    
        })
        build.addCase(fetchSingleProduct.fulfilled, (state, action) => {            
            state.isLoading = false
            state.product = action.payload
        })
        build.addCase(deleteProduct.fulfilled, (state) => {                                   
            state.isLoading = false
        })
        build.addCase(createProduct.fulfilled, (state, action) => {            
            state.isLoading = false
            if(action.payload !== null) {
                state.error = true       
                state.product = action.payload
            }            
        })
        build.addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false            
            if(action.payload != null) {
                state.product = action.payload
            }
        })
        build.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            state.isLoading = false            
            state.products = action.payload
        })
    }
});

export default productsSlice.reducer