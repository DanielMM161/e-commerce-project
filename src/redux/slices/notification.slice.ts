import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
    name: 'categories',
    initialState: {
      show: false,
      message: ""
    },
    reducers: {
      showNotification: (state) => {
        state.show = true        
      },
      hiddeNotification: (state) => {
        state.show = false
      }
    },
})

export const { showNotification, hiddeNotification} = notificationSlice.actions

export default notificationSlice.reducer