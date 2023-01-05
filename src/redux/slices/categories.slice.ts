import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CategoriesEmptyState } from "../../models";

export const fetchAllCategories = createAsyncThunk('fetchAllCategories',
    async () => {
    try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
        return response.data
    } catch (error) {
        console.log(error);
    }
});

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: CategoriesEmptyState,
    reducers: {
    },
    extraReducers: (build) => {
        build.addCase(fetchAllCategories.fulfilled, (state, action) => {
            if(action.payload && 'message' in action.payload) {
                console.log('fetching products error')
                return state
            }
            state = action.payload
            return state
        })
        build.addCase(fetchAllCategories.rejected, (state ) => {
            console.log('error in getting products');
            return state
        })
    }
})

export default categoriesSlice.reducer