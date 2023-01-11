import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosInstance } from "axios";
import { IFetchProductCategoryProps, IProductPost, IProductUpdate } from "../models";
import { showNotification } from "../redux/slices";
import { BASE_URL } from "../utilities/constants";
import { CREATE_PRODUCT_MESSAGE, DELETE_PRODUCT_MESSAGE, UPDATE_PRODUCT_MESSAGE } from "../utilities/products.actions.messages";

const products: AxiosInstance = axios.create({
  baseURL: BASE_URL
});

export const fetchProductsByCategory = createAsyncThunk('fetchProductByCategory',
  async (props: IFetchProductCategoryProps) => {
  try {
      const response = await products.get(`/categories/${props.categoryId}/products?offset=0&limit=${props.limit}`);
      if(response.status === 200) {        
        return response.data
      }
      return []
  } catch (error: any) {
      console.error("Some problems in fetchAllProducts", error.response)
      return []
  }
});

export const fetchAllProducts = createAsyncThunk('fetchAllProducts',
  async (limit: number) => {
  try {
      const response = await products.get(`/products?offset=0&limit=${limit}`);
      if(response.status === 200) {        
        return response.data
      }
      return []
  } catch (error: any) {
      console.error("Some problems in fetchAllProducts", error.response)
      return []
  }
});

export const fetchSingleProduct = createAsyncThunk('fetchSingleProduct',
  async (productId: string | number) => {
    try {
      const response = await products.get(`/products/${productId}`)
      if(response.status === 200) {
        return response.data
      }
      return null
    } catch (error: any) {      
      console.error("Some problems in fetchSingleProduct", error.response)
      return null
    }
  }
)

export const deleteProduct = createAsyncThunk('deleteProduct',
  async (productId: number, thunkAPI) => {
    try {
      const response = await products.delete(`/products/${productId}`)
      if(response.status === 200 && response.data) {
        thunkAPI.dispatch(showNotification({
          error: false,
          message: DELETE_PRODUCT_MESSAGE.success
        }))
        return productId
      }
      thunkAPI.dispatch(showNotification({
        error: true,
        message: DELETE_PRODUCT_MESSAGE.error
      }))
    } catch (error: any) {
      thunkAPI.dispatch(showNotification({
        error: true,
        message: DELETE_PRODUCT_MESSAGE.error
      }))    
    }
  }
)

export const createProduct = createAsyncThunk('createProduct',
  async (product: IProductPost, thunkAPI) => {
    try {
      const response = await products.post('/products/', 
        {
          title: product.title,
          price: product.price,
          description: product.description,
          categoryId: product.categoryId,
          images: [
            "https://api.lorem.space/image?w=150&h=180",
            "https://api.lorem.space/image?w=150&h=180",
            "https://api.lorem.space/image?w=150&h=180"
          ]
        }
      )      
      if(response.status === 201) {
        thunkAPI.dispatch(showNotification({
          error: false, 
          message: CREATE_PRODUCT_MESSAGE.success
        }))
        return response.data
      }
      thunkAPI.dispatch(showNotification({
        error: true, 
        message: CREATE_PRODUCT_MESSAGE.error
      }))
      return null
    } catch (error: any) {
      thunkAPI.dispatch(showNotification({
        error: true, 
        message: CREATE_PRODUCT_MESSAGE.error
      }))
      return null
    }
  }
)

export const updateProduct = createAsyncThunk('updateProduct',
  async (product: IProductUpdate, thunkAPI) => {
    try {
      const response = await products.put(`/products/${product.id}`, 
        {
          title: product.title,
          price: product.price,
          description: product.description
        }
      )      
      if(response.status === 201 || response.status === 200) {
        thunkAPI.dispatch(showNotification({
          error: false, 
          message: UPDATE_PRODUCT_MESSAGE.success
        }))
        return response.data
      }
      thunkAPI.dispatch(showNotification({
        error: true, 
        message: UPDATE_PRODUCT_MESSAGE.error
      }))
      return null
    } catch (error: any) {
      thunkAPI.dispatch(showNotification({
        error: true, 
        message: UPDATE_PRODUCT_MESSAGE.error
      }))    
      return null
    }
  }
)