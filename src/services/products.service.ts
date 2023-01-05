import axios, { AxiosInstance } from "axios";
import { loadAbort } from "../utilities/load-abort-axios.utility";

const PLATZI_URL = "https://api.escuelajs.co/api/v1/products"
const FAKE_API_URL = "https://fakestoreapi.com/products"

const products: AxiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/"
});

export const getProductsByCategory = (offset: number, categoryId: number) => {
    const controller = loadAbort()
    return {call: products.get(`categories/${categoryId}/products?offset=${offset}&limit=10`, { signal: controller.signal }), controller };
}

export const getProductsPagination = (offset: number) => {
  const controller = loadAbort()
  return {call: products.get(`products?offset=${offset}&limit=10`, { signal: controller.signal }), controller };
}

export const getProductById = (id: number) => {
  const controller = loadAbort()
  return {call: products.get(`/${id}`,  { signal: controller.signal }), controller }
}