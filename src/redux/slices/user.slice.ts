import { createSlice, current } from "@reduxjs/toolkit";
import { userEmptyState } from "../../models";
import { createUser, fetchUserSession, loginUser } from "../../services";

// MANAGE USER STATUS HERE TODO

export const userSlice = createSlice({
    name: 'user',
    initialState: userEmptyState,
    reducers: {
        logOut: (state, action) => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            state.user = null
        }
    },
    extraReducers: (build) => {
        /** pending */
        build.addCase(loginUser.pending, (state, action) => {            
            state.isLoading = true           
        })
        /** fulfilled */
        build.addCase(fetchUserSession.fulfilled, (state, action) => {
            console.log("fetchUserSession --> ", action.payload)
            //return action.payload
        })
        build.addCase(createUser.fulfilled, (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload))
            return action.payload
        })
        build.addCase(loginUser.fulfilled, (state, action) => {            
            state.isLoading = false
            if(action.payload === null) {
                state.isError = true
                console.log(" state ", current(state))
                return
            }
            localStorage.setItem('refresh_token', JSON.stringify(action.payload))
            console.log(" state ", current(state))            
        })
    }
});

export default userSlice.reducer