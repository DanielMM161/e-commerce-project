import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { categoriesSlice, productsSlice, userSlice, cartSlice } from './slices';
import { notificationSlice } from './slices/notification.slice';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,    
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    notifications: notificationSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
