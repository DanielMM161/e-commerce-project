import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosInstance } from "axios";
import { IProductPost, IProductUpdate, Product } from "../models";
import { BASE_URL } from "../utilities/constants";

const products: AxiosInstance = axios.create({
  baseURL: BASE_URL
});

export const fetchAllProducts = createAsyncThunk('fetchAllProducts',
  async (offset: number, thunkAPI) => {
  try {
      const response = await products.get(`/products?offset=0&limit=${offset}`);
      return response
  } catch (error: any) {
    //SET ERROR AND SET NOTIFICATION ERROR
      return error.response
  }
});

export const fetchSingleProduct = createAsyncThunk('fetchSingleProduct',
  async (productId: string | number, thunkAPI) => {
    try {
      const response = await products.get(`/products/${productId}`)
      return response
    } catch (error: any) {
      //SET ERROR AND SET NOTIFICATION ERROR
      return error.response
    }
  }
)

export const deleteProduct = createAsyncThunk('deleteProduct',
  async (productId: number | string, thunkAPI) => {
    try {
      const response = await products.delete(`/products/${productId}`)
      return response
    } catch (error: any) {
       //SET ERROR AND SET NOTIFICATION ERROR
      return error.response
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
        return response.data
      }
      return null
    } catch (error: any) {
       //SET ERROR AND SET NOTIFICATION ERROR
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
      return response
    } catch (error: any) {
      //SET ERROR AND SET NOTIFICATION ERROR      
       return error.response
    }
  }
)
