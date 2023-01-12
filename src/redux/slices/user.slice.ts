import { createSlice, current } from "@reduxjs/toolkit";

import { userInitialState } from "../../models";
import { createUser, fetchUserProfile, loginUser, updateUser, fetchUserSession } from "../../services";

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        logOut: (state) => {
            localStorage.removeItem('user')
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
        build.addCase(updateUser.pending, (state) => {            
            state.isLoading = true        
        })
        build.addCase(createUser.pending, (state) => {            
            state.isLoading = true        
        })
        /** fulfilled */
        build.addCase(fetchUserProfile.fulfilled, (state, action) => {
            state.isLoading = false     
            state.user = action.payload            
        })
        build.addCase(createUser.fulfilled, (state) => {
            state.isLoading = false        
        })
        build.addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false
            if(action.payload !== null ) {
                state.user = action.payload
            }          
        })
        build.addCase(loginUser.fulfilled, (state) => {            
            state.isLoading = false        
        })
        build.addCase(fetchUserSession.fulfilled, (state) => {            
            state.isLoading = false
        })
    }
});

export const { logOut } = userSlice.actions

export default userSlice.reducer