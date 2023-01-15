import {createSlice } from "@reduxjs/toolkit";
import { productsInitialState } from "../../models";
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
        })
        build.addCase(createProduct.pending , (state) => {
            state.isLoading = true
        })
        build.addCase(fetchSingleProduct.pending , (state) => {
            state.isLoading = true            
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
        /** Fulfilled */
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {            
            state.isLoading = false
            state.products = action.payload    
        })
        build.addCase(fetchSingleProduct.fulfilled, (state, action) => {            
            state.isLoading = false            
        })
        build.addCase(deleteProduct.fulfilled, (state) => {                                   
            state.isLoading = false
        })
        build.addCase(createProduct.fulfilled, (state, action) => {            
            state.isLoading = false         
        })
        build.addCase(updateProduct.fulfilled, (state, action) => {
            state.isLoading = false            
        })
        build.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            state.isLoading = false            
            state.products = action.payload
        })
        /** Rejected*/
    }
});

export default productsSlice.reducer