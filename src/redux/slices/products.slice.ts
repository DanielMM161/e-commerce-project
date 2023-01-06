import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductsEmptyState } from "../../models";

export const fetchAllProducts = createAsyncThunk('fetchAllProducts',
    async (offset: number) => {
    try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`);
        return response.data
    } catch (error) {
        console.log(error);
    }
});

export const productsSlice = createSlice({
    name: 'products',
    initialState: ProductsEmptyState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchAllProducts.pending , (state, action) => {
            state.isLoading = true
        }),
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {            
            state.isLoading = false    
            if(action.payload === undefined) {

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

export default productsSlice.reducer