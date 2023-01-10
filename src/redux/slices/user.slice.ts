import { createSlice, current } from "@reduxjs/toolkit";
import { userEmptyState } from "../../models";
import { createUser, fetchUserProfile, loginUser, fetchUserSession } from "../../services";

// MANAGE USER STATUS HERE TODO

export const userSlice = createSlice({
    name: 'user',
    initialState: userEmptyState,
    reducers: {
        logOut: (state) => {
            localStorage.removeItem('access_token')
            state.user = null
        }
    },
    extraReducers: (build) => {
        /** pending */
        build.addCase(loginUser.pending, (state) => {            
            state.isLoading = true        
        })
        build.addCase(fetchUserProfile.pending, (state) => {            
            state.isLoading = true           
        })
        /** fulfilled */
        build.addCase(fetchUserSession.fulfilled, (state, action) => {
            if(action.payload === null) {
                state.isLoading = false    
                state.isError = true
            }            
            state.user = action.payload            
        })
        build.addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.isLoading = false
            if(action.payload === null) {
                state.isError = true
            }            
            state.user = action.payload            
        })
        build.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false
            if(action.payload === null) {
                state.isError = true
            }            
        })
        build.addCase(loginUser.fulfilled, (state, action) => {            
            state.isLoading = false
            if(action.payload === null) {
                state.isError = true               
            }
            state.isError = false
            state.user = action.payload
            localStorage.setItem('access_token', JSON.stringify(action.payload))         
        })
    }
});

export const { logOut } = userSlice.actions

export default userSlice.reducer