import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserAuth, IUserRegister } from "../models";
import { BASE_URL } from "../utilities/constants";

const userServices = axios.create({
  baseURL: BASE_URL
})

export const fetchUserSession = createAsyncThunk('authUser',
  async (token: string) => {
  try {      
      const response = await userServices.get('/auth/profile', {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
    return response
  } catch (error: any) {
    console.log("error fetchUserSession -> ", error)
      //TODO MANAGE ERROR
      return error.response
  }
})


export const createUser = createAsyncThunk('createUser',
  async (userRegistration: IUserRegister) => {
  try {      
      const response = await userServices.post('/users', {
        name: userRegistration.name,
        email: userRegistration.email,
        password: userRegistration.password,
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
      })        
      return response
  } catch (error: any) {
      //TODO MANAGE ERROR
      return error.response
  }
})

export const loginUser = createAsyncThunk('loginUser',
  async (userLogin: IUserAuth, thunkAPI) => {
  try {      
    const response = await userServices.post('/auth/login', {
      email: userLogin.email,
      password: userLogin.password
    })
    if (response.status === 201) {
      const value = response.data
      thunkAPI.dispatch(fetchUserSession(value['access_token']))
      return value['refresh_token']
    }    
    return null
  } catch (error: any) {
    
    //TODO Manage error
    return null
  }
})