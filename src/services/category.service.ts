import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

import { BASE_URL } from "../utilities";


export const fetchAllCategories = createAsyncThunk('fetchAllCategories',
    async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories`);
        return response.data
    } catch (error: any) {
        // manage error
        
    }
});
