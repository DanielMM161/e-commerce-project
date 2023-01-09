import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../utilities/constants";

const category: AxiosInstance = axios.create({
  baseURL: BASE_URL
});

export const fetchAllCategories = createAsyncThunk('fetchAllCategories',
    async () => {
    try {
        const response = await category.get(`/categories`);
        return response.data
    } catch (error: any) {
        // manage error
        
    }
});
