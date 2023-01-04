import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, ProductsEmptyState } from "../../models";

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
    reducers: {
        setEmptyState: (state) => {
            state = ProductsEmptyState
            return state
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchAllProducts.pending , (state, action) => {
            state.isLoading = true
        }),
        build.addCase(fetchAllProducts.fulfilled, (state, action) => {
            if(action.payload && 'message' in action.payload) {
                console.log('fetching products error')
                return state
            }
            state.isLoading = false
            state.products = [...state.products, ...action.payload]
            return state
        })
        build.addCase(fetchAllProducts.rejected, (state) => {
            state.isLoading = false
            console.log('error in getting products');
            return state
        })
    }
});

export const { setEmptyState} = productsSlice.actions

export default productsSlice.reducer