import { createSlice } from "@reduxjs/toolkit";
import { UserEmptyState } from "../../models";
import { fetchUserSession } from "../../services";

export const userSlice = createSlice({
    name: 'user',
    initialState: UserEmptyState,
    reducers: {
    },
    extraReducers: (build) => {
        build.addCase(fetchUserSession.fulfilled, (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload))
            return action.payload
        })
    }
});

export default userSlice.reducer