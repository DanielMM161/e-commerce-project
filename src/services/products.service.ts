import { createAsyncThunk } from "@reduxjs/toolkit";

import { IFetchProductCategoryProps, IProductPost, IProductUpdate } from "../models";
import { showNotification } from "../redux/slices";
import { CREATE_PRODUCT_MESSAGE, DELETE_PRODUCT_MESSAGE, UPDATE_PRODUCT_MESSAGE } from "../utilities/products.actions.messages";
import { BASE_URL } from "../utilities";

import axios, { AxiosError } from 'axios';



export const fetchProductsByCategory = createAsyncThunk('fetchProductByCategory',
  async (props: IFetchProductCategoryProps) => {
  try {    
      const response = await axios.get(`${BASE_URL}/categories/${props.categoryId}/products?offset=0&limit=${props.limit}`);
      if(response.status === 200) {        
        return response.data
      }
      return []
  } catch (error: any) {
      //console.error("Some problems in fetchAllProducts", error.response)
      return []
  }
});

export const fetchAllProducts = createAsyncThunk('fetchAllProducts',
  async (limit: number) => {
  try {
      const response = await axios.get(`${BASE_URL}/products?offset=0&limit=${limit}`);
      if(response.status === 200) {        
        return response.data
      }
      return []
  } catch (error: any) {
      //console.error("Some problems in fetchAllProducts", error.response)
      return []
  }
});

export const fetchSingleProduct = createAsyncThunk('fetchSingleProduct',
  async (productId: string | number) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${productId}`)
      if(response.status === 200) {
        return response.data
      }
      return null
    } catch (error) {      
      const err = error as AxiosError
      //console.error("Some problems in fetchSingleProduct", err)
      return null
    }
  }
)

export const deleteProduct = createAsyncThunk('deleteProduct',
  async (productId: number, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/products/${productId}`)
      if(response.status === 200 && response.data) {
        thunkAPI.dispatch(showNotification({
          error: false,
          message: DELETE_PRODUCT_MESSAGE.success
        }))
        return true
      }
      thunkAPI.dispatch(showNotification({
        error: true,
        message: DELETE_PRODUCT_MESSAGE.error
      }))
      return null
    } catch (error: any) {
      thunkAPI.dispatch(showNotification({
        error: true,
        message: DELETE_PRODUCT_MESSAGE.error
      }))
      const err = error as AxiosError
      //console.error("Error in deleteProduct", err)
      return null
    }
  }
)

export const createProduct = createAsyncThunk('createProduct',
  async (product: IProductPost, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/products/`, 
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
     
      if(response.status === 201 || response.status === 200) {
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
      const response = await axios.put(`${BASE_URL}/products/${product.id}`, 
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