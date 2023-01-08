import {createSlice } from "@reduxjs/toolkit";
import { ProductsEmptyState } from "../../models";
import { fetchAllProducts } from "../../services";

export const productsSlice = createSlice({
    name: 'products',
    initialState: ProductsEmptyState,
    reducers: {
        addNewItem: (state, action) => {            
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchAllProducts.pending , (state, action) => {
            state.isLoading = true
        }),
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {            
            state.isLoading = false    
            if(action.payload === undefined) {
                console.log("error fetching products");                
                return state
            }
            state.products = [...state.products, ...action.payload]
            return state
        })
        build.addCase(fetchAllProducts.rejected, (state) => {
            state.isLoading = false            
            return state
        })
    }
});

export const { addNewItem } = productsSlice.actions

export default productsSlice.reducer