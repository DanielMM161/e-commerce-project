import axios, { AxiosInstance } from "axios";

import { BASE_URL } from "../utilities";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL
});