import { createSlice } from "@reduxjs/toolkit";
import { INotificationPayload, notificationInitialState } from "../../models/notification.model";

export const notificationSlice = createSlice({
    name: 'categories',
    initialState: notificationInitialState,
    reducers: {
      showNotification: (state, action: {payload: INotificationPayload, type: string}) => {
        state.show = true  
        state.error = action.payload.error
        state.message = action.payload.message
      },
      hiddeNotification: (state) => {
        state.show = false        
      }
    },
})

export const { showNotification, hiddeNotification} = notificationSlice.actions

export default notificationSlice.reducer