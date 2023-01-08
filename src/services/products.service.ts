import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosInstance } from "axios";
import { IProductPost, IProductUpdate } from "../models";

const products: AxiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1"
});

export const fetchAllProducts = createAsyncThunk('fetchAllProducts',
    async (offset: number) => {
    try {
        const response = await products.get(`/products?offset=0&limit=${offset}`);
        return response.data
    } catch (error) {
        console.log(error);
    }
});

export const getSingleProduct = async (productId: string) => {
  return await products.get(`/products/${productId}`)
}

export const deleteProduct = async (productId: number) => {
  return await products.delete(`/products/${productId}`)
}

export const createProduct = async (product: IProductPost) => {
  return await products.post('/products/', 
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
}

export const updateProduct = async (product: IProductUpdate) => {
  return await products.put(`/products/${product.id}`, 
    {
      title: product.title,
      price: product.price,
      description: product.description
    }
  )
}