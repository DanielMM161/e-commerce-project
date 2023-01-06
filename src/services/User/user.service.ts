import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserRegistration } from "../../models";

const userServices = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1"
})

export const fetchUserSession = createAsyncThunk('authUser',
    async (token: string) => {
    try {      
        const response = await userServices.get('/auth/profile', {
          headers: {
              Authorization : `Bearer ${token}`
          }
      })        
        return response.data
    } catch (error) {
        console.log(error);
    }
});


export const createUser = createAsyncThunk('createUser',
    async (userRegistration: UserRegistration) => {
    try {      
        const response = await userServices.post('/users', {
          name: userRegistration.name,
          email: userRegistration.email,
          password: userRegistration.password,
          avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
        })        
        return response.data
    } catch (error) {
        console.log(error);
    }
});


export const serviceLoginUser = async (email: string, password: string) => {
  return await userServices.post('/auth/login', {email: email, password: password})
      .then((value) => {        
        if(value.status === 201) {
          return value.data['access_token']
        }
        return ""
      })
      .catch(() => "")
}