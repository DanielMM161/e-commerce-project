
import { IAddCart } from '../../models/cart.model';
import { store } from '../../redux/store';
import { addCartItem, deleteItem, updateQuantity } from '../../redux/slices';

import { Product } from './../../models/products.model';

describe('State Cart tests ', () => {

  test('Cart Initial State', () => {
    expect(store.getState().cart.length).toBe(0)
  })

  test('Add Cart Item', () => {
    const product: Product = {
      id: 255,
      title: "New Product",
      description: "New Description",
      images: [
        ""
      ],
      price: 300,
      category: {
        id: 5,
        name: "Category Name",
        image: ""
      },
    }
    const newProduct: IAddCart = {
      quantity: 1,
      product: product
    }

    store.dispatch(addCartItem(newProduct))
    expect(store.getState().cart.length).toBe(1)
  })

  test('Add Same Item', () => {
    const product: Product = {
      id: 255,
      title: "New Product",
      description: "New Description",
      images: [
        ""
      ],
      price: 300,
      category: {
        id: 5,
        name: "Category Name",
        image: ""
      },
    }
    const newProduct: IAddCart = {
      quantity: 1,
      product: product
    }

    store.dispatch(addCartItem(newProduct))
    expect(store.getState().cart.length).toBe(1)
    expect(store.getState().cart[0].quantity).toBe(2)

  })

  test('Update Quantity', () => {
    store.dispatch(updateQuantity({newQuantity: 4, idProduct: 255}))
    expect(store.getState().cart[0].quantity).toBe(4)
  })


  test('Delete Cart Item', () => {
    store.dispatch(deleteItem(255))
    expect(store.getState().cart.length).toBe(0)
  })

})