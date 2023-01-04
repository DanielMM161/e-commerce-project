import axios, { AxiosInstance } from "axios";
import { Categories, Category } from "../models";
import { loadAbort } from "../utilities/load-abort-axios.utility";

const PLATZI_URL = "https://api.escuelajs.co/api/v1/categories"
const FAKE_API_URL = "https://fakestoreapi.com/products/categories"

const products: AxiosInstance = axios.create({
  baseURL: PLATZI_URL
});

export const getAllCategory = () => {
  const controller = loadAbort()
    return {call: products.get<Categories>('', { signal: controller.signal }), controller };
}

export const getCategoryById = (id: number) => {
  const controller = loadAbort()
  return {call: products.get<Category>(`/${id}`,  { signal: controller.signal }), controller }
}