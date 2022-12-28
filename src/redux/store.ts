import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { Product, Products, User } from '../models';
import { productsSlice } from './slices/products.slice';

export interface AppStore {
  //user: User
  products: Product[]
  //product: Product
}

export const store = configureStore<AppStore>({
  reducer: {
    products: productsSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
