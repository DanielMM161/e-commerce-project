import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { singleProductEmptyState } from "../../models";

export const fetchSingleProduct = createAsyncThunk('fetchSingleProduct',
    async (productId: string) => {
    try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
});

export const singleProductSlice = createSlice({
    name: 'product',
    initialState: singleProductEmptyState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(fetchSingleProduct.pending , (state, action) => {
            state.isLoading = true
        }),
        build.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            if(action.payload && 'message' in action.payload) {
                console.log('fetching products error')
                return state
            }
            state.isLoading = false
            state.product = action.payload
            return state
        })
        build.addCase(fetchSingleProduct.rejected, (state) => {
            state.isLoading = false
            console.log('error in getting products');
            return state
        })
    }
});

export default singleProductSlice.reducer