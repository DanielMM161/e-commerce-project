import { createSlice } from "@reduxjs/toolkit";
import { singleProductEmptyState } from "../../models";
import { fetchSingleProduct } from "../../services";

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