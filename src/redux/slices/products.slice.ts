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
            return {
                ...state,
                isLoading: true
            }
        })
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {                        
            if(action.payload === undefined) {
                console.log("error fetching products");                
                return {
                    ...state,
                    isLoading: false
                }
            }            
            return {
                ...state,
                isLoading: false,
                products: [...action.payload]
            }
        })
        build.addCase(fetchAllProducts.rejected, (state) => {            
            return {
                ...state,
                isLoading: false
            }
        })
    }
});

export const { addNewItem } = productsSlice.actions

export default productsSlice.reducer