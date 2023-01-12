import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "./service-instance.service";


export const fetchAllCategories = createAsyncThunk('fetchAllCategories',
    async () => {
    try {
        const response = await axiosInstance.get(`/categories`);
        return response.data
    } catch (error: any) {
        // manage error
        
    }
});
