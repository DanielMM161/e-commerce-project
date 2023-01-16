import { createAsyncThunk } from "@reduxjs/toolkit";

import axios, { AxiosError } from 'axios';

import { BASE_URL } from "../utilities";


export const fetchAllCategories = createAsyncThunk('fetchAllCategories',
    async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories`);
        if(response.status === 200) {
            return response.data
        }
        return []
    } catch (error) {
        const err = error as AxiosError
        console.error('Error in fetchAllCategories', err.message)
        return []
        
    }
});
