import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { categoriesSlice, productsSlice, userSlice, cartSlice } from './slices';

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,    
    user: userSlice.reducer,
    cart: cartSlice.reducer
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
