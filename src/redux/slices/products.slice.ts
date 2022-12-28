import { createSlice } from "@reduxjs/toolkit";
import { ProductsEmptyState } from "../../models";

export const productsSlice = createSlice({
    name: 'products',
    initialState: ProductsEmptyState,
    reducers: {
        getProducts: (state, action) => {
            state = action.payload
            return state
        },
        getProductsByCategory: (state, action) => action.payload
    }
});

export const { getProducts, getProductsByCategory} = productsSlice.actions

export default productsSlice.reducer