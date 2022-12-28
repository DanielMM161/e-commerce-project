import { createSlice } from "@reduxjs/toolkit";
import { UserEmptyState } from "../../models";

export const userSlice = createSlice({
    name: 'user',
    initialState: UserEmptyState,
    reducers: {
        
    }
});

export const { } = userSlice.actions

export default userSlice.reducer