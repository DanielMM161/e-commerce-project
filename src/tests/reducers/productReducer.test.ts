import { store } from './../../redux/store';
import { deleteProduct, fetchProductsByCategory, fetchSingleProduct, createProduct } from './../../services/products.service';

import { fetchAllProducts } from "../../services";
import { IProductPost } from '../../models';
import productServer from '../servers/products.server';


beforeAll(() => {
  productServer.listen()
})

afterAll(() => {
  productServer.close()
})

describe('Initial State tests', () => {

  test('products initial state', () => {
      expect(store.getState().products.products.length).toBe(0)
  })

})

describe('Product Service tests', () => {

  test('fetch products with limit', async () => {
      await store.dispatch(fetchAllProducts(7));
      expect(store.getState().products.products.length).toBe(7);
  })

  test('fetch products by category', async () => {
    await store.dispatch(fetchProductsByCategory({categoryId: 1, limit: 7}));
    expect(store.getState().products.products.length).toBe(7);
  })

  test('delete product', async () => {
    let value = await store.dispatch(deleteProduct(95))    
    expect(value.payload).toBe(true)

    value = await store.dispatch(deleteProduct(-1))
    expect(value.payload).toBeNull
  })

  test('create new product', async () => {
    let newProduct: IProductPost = {
      title: "new Product",
      description: "new description",
      price: 200,
      categoryId: 1
    }    
    let value = await store.dispatch(createProduct(newProduct))
    expect(value.payload.title).toBe(newProduct.title)

    newProduct = {
      title: "new Product",
      description: "new description",
      price: -1,
      categoryId: 1
    }    
    value = await store.dispatch(createProduct(newProduct))
    expect(value.payload).toBeNull()
  })

  test('fetch single product', async () => {
    // await store.dispatch(fetchSingleProduct(-1))
    // expect(store.getState().products.product).toBeNull()

    // await store.dispatch(fetchSingleProduct(90))
    // expect(store.getState().products.product?.id).toBe(90)
  })

})