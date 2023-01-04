import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { Category, Product, User } from '../models';
import { categoriesSlice } from './slices/categories.slice';
import { productsSlice } from './slices/products.slice';

export interface AppStore {
  //user: User
  products: Product[]
  categories: Category[]
  //product: Product
}

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
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
