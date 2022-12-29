import axios, { AxiosInstance } from "axios";
import { Categories, Category, Product, Products } from "../models";
import { loadAbort } from "../utilities/load-abort-axios.utility";

const products: AxiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/categories" 
});

export const getAllCategory = () => {
    const controller = loadAbort()
    return {call: products.get<Categories>('', { signal: controller.signal }), controller };
}

export const getCategoryById = (id: number) => {
  const controller = loadAbort()
  return {call: products.get<Category>(`/${id}`,  { signal: controller.signal }), controller }
}