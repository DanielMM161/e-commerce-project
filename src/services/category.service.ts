import axios, { AxiosInstance } from "axios";
import { Categories, Category } from "../models";

const PLATZI_URL = "https://api.escuelajs.co/api/v1/categories"

const products: AxiosInstance = axios.create({
  baseURL: PLATZI_URL
});
