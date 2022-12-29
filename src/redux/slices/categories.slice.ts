import { createSlice } from "@reduxjs/toolkit";
import { CategoriesEmptyState } from "../../models";

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: CategoriesEmptyState,
    reducers: {
        getCategories: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const { getCategories } = categoriesSlice.actions

export default categoriesSlice.reducer