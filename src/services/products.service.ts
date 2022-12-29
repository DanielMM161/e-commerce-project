import axios, { AxiosInstance } from "axios";
import { Product, Products } from "../models";
import { loadAbort } from "../utilities/load-abort-axios.utility";

const products: AxiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/products" 
});

export const getProductsPagination = (offset: number) => {
    const controller = loadAbort()
    return {call: products.get<Products>(`?offset=${offset}&limit=10`, { signal: controller.signal }), controller };
}

export const getProductById = (id: number) => {
  const controller = loadAbort()
  return {call: products.get<Product>(`/${id}`,  { signal: controller.signal }), controller }
}