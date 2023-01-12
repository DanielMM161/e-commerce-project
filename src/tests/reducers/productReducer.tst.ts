import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { RootState } from "../../redux/store";
import { fetchAllProducts } from "../../services";
import { productServer } from "../servers";
import { store } from './../../redux/store';

productServer.listen()
// beforeAll(() => {
// })

// afterAll(() => {
//   productServer.close()
// })

describe('productReducer tests', () => {
  test('products initial value', () => {
      expect(store.getState().products.products.length).toBe(7)
  })

  test('fetch products with limit', async () => {
      await store.dispatch(fetchAllProducts(3));
      expect(store.getState().products.products.length).toBe(3);
  })
})