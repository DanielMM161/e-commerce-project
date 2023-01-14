import { createSlice } from "@reduxjs/toolkit";

import { categoriesEmptyState } from "../../models";
import { fetchAllCategories } from "../../services";

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: categoriesEmptyState,
    reducers: {
    },
    extraReducers: (build) => {
        build.addCase(fetchAllCategories.fulfilled, (state, action) => {                        
            state.categories = action.payload
        })
    }
})

export default categoriesSlice.reducer