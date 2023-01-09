import {createSlice, current } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { initialState, Product } from "../../models";
import { 
    fetchAllProducts, 
    fetchSingleProduct, 
    deleteProduct, 
    createProduct, 
    updateProduct 
} from "../../services";

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        addNewItem: (state, action) => {            
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }
    },
    extraReducers: (build) => {
         /** pending */
        build.addCase(fetchAllProducts.pending , (state, action) => {
            state.isLoading = true
        })
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {
            if(action.payload != undefined) {
                const {data, status} = action.payload                                  
                if(status === 400 || status === 404 || status === 500) {
                    state.isLoading = false
                    state.error = true             
                }
                state.isLoading = false
                state.products = data
                console.log(current(state));
            } else {
                state.isLoading = false
                state.error = true  
            }
            
        })
        /** fulfilled */
        build.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            if(action.payload != undefined) {
                const {data, status} = action.payload as AxiosResponse<any, any>    
                if(status === 400 || status === 404 || status === 500) {
                    state.isLoading = false
                    state.error = true             
                }
                state.isLoading = false
                state.product = data                
            } else {
                state.isLoading = false
                state.error = true  
            }                 
        })
        build.addCase(deleteProduct.fulfilled, (state, action) => {
            const {data, status} = action.payload as AxiosResponse<any, any>                          
            if(status === 400 || status === 404 || status === 500) {
                state.isLoading = false
                state.error = true             
            }
            state.isLoading = false
            state.product = null                    
        })
        build.addCase(createProduct.fulfilled, (state, action) => {
            const {data, status} = action.payload as AxiosResponse<any, any>                          
            if(status === 400 || status === 404 || status === 500) {
                state.isLoading = false
                state.error = true             
            }
            state.isLoading = false
            state.product = data
        })
        build.addCase(updateProduct.fulfilled, (state, action) => {
            const {data, status} = action.payload as AxiosResponse<any, any>                          
            if(status === 400 || status === 404 || status === 500) {
                state.isLoading = false
                state.error = true             
            }
            state.isLoading = false
            state.product = data
            console.log(current(state));
            
        })
        /** rejected */
        build.addCase(fetchAllProducts.rejected, (state, action) => {
            state.isLoading = false
            state.error = true
        })
    }
});

export const { addNewItem } = productsSlice.actions

export default productsSlice.reducer