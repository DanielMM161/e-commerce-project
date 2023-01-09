import { createSlice, current } from "@reduxjs/toolkit";
import { emptyState } from "../../models";
import { fetchAllCategories } from "../../services";


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: emptyState,
    reducers: {
    },
    extraReducers: (build) => {
        build.addCase(fetchAllCategories.fulfilled, (state, action) => {                        
            state.categories = [...action.payload]            
        })
    }
})

export default categoriesSlice.reducer