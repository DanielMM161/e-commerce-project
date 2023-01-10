import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUpdateUser, IUserAuth, IUserRegister } from "../models";
import { BASE_URL } from "../utilities/constants";

const userServices = axios.create({
  baseURL: BASE_URL
})

export const fetchUserSession = createAsyncThunk('fetchUserSession',
  async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('access_token')
    if(token != null) {
      thunkAPI.dispatch(fetchUserProfile(JSON.parse(token)))
    }
    //TODO MANAGE ERROR
    return null
  } catch (error: any) {    
    //TODO MANAGE ERROR
    return null
  }
})

export const fetchUserProfile = createAsyncThunk('fetchUserProfile',
  async (token?: string) => {
  try {            
      const response = await userServices.get('/auth/profile', {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
    if(response.status === 200) {
      return response.data
    }
    //TODO MANAGE ERROR
    return null
  } catch (error: any) {    
      //TODO MANAGE ERROR
      return null
  }
})


export const createUser = createAsyncThunk('createUser',
  async (userRegistration: IUserRegister, thunkAPI) => {
  try {      
      const response = await userServices.post('/users', {
        name: userRegistration.name,
        email: userRegistration.email,
        password: userRegistration.password,
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
      })
      if(response.status === 201) {
        thunkAPI.dispatch(loginUser({
          email: userRegistration.email,
          password: userRegistration.password
        }))
        return
      }
      //TODO MANAGE ERROR
      return null
  } catch (error: any) {
      //TODO MANAGE ERROR
      return null
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
      thunkAPI.dispatch(fetchUserProfile(value['access_token']))
      return value['access_token']
    }    
    return null
  } catch (error: any) {
    
    //TODO Manage error
    return null
  }
})

export const updateUser = createAsyncThunk('updateUser',
  async (newFields: IUpdateUser) => {
    try {
      const response = await userServices.put(`/users/${newFields.id}`, {
        email: newFields.email,
        name: newFields.fullName,
      })
      console.log("response --< ", response);
      
    } catch (error: any) {
      
    }
  }
)