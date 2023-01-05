import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { Category, Product, User } from '../models';
import { categoriesSlice, productsSlice, singleProductSlice, userSlice } from './slices';

export interface AppStore {
  //user: User
  products: Product[]
  categories: Category[]
 // product: Product
}

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
    singleProduct: singleProductSlice.reducer,
    user: userSlice.reducer
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
