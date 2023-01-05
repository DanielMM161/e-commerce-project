import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userServices = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/auth/"
})

export const fetchUserSession = createAsyncThunk('authUser',
    async (token: string) => {
    try {
      console.log("token ", typeof token);
        const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile', {
          headers: {
              Authorization : `Bearer ${token}`
          }
      })
        
        console.log("fetchUserSession --> ", response.data);
        
        return response.data
    } catch (error) {
        console.log(error);
    }
});


export const serviceLoginUser = async (email: string, password: string) => {
  return await userServices.post('login', {email: email, password: password})
      .then((value) => {        
        if(value.status === 201) {
          return value.data['access_token']
        }
        return ""
      })
      .catch(() => "")
}