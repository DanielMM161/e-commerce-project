import { createAsyncThunk } from "@reduxjs/toolkit";

import { IUpdateUser, IUserAuth, IUserRegister } from "../models";
import { showNotification } from "../redux/slices";
import { BASE_URL, CREATE_USER_MESSAGE, LOGIN_USER_MESSAGE, UPDATE_USER_MESSAGE } from "../utilities/constants";

import axios, { AxiosError } from 'axios';


export const fetchUserProfile = createAsyncThunk('fetchUserProfile',
  async (token: string, thunkAPI) => {   

  const response = await axios.get(`${BASE_URL}/auth/profile`, {
    headers: {
        Authorization : `Bearer ${token}`
    }
  })

  if(response.status === 200) {
    thunkAPI.dispatch(showNotification({error: false, message: LOGIN_USER_MESSAGE.success}))
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
  } else {
    thunkAPI.dispatch(showNotification({error: true, message: LOGIN_USER_MESSAGE.error}))
    thunkAPI.rejectWithValue(null)
  }
})

export const fetchUserSession = createAsyncThunk('fetchUserSession',
  async (_, thunkAPI) => {
  const token = localStorage.getItem('access_token')  
  if(token != null) {
    thunkAPI.dispatch(fetchUserProfile(JSON.parse(token)))     
  } else {
    thunkAPI.rejectWithValue(null)
  }
})

export const createUser = createAsyncThunk('createUser',
  async (userRegistration: IUserRegister, thunkAPI) => {
    
  const response = await axios.post(`${BASE_URL}/users`, {
    name: userRegistration.name,
    email: userRegistration.email,
    password: userRegistration.password,
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
  })

  if(response.status === 201 || response.status === 200) {
    return response.data
  } else {
    thunkAPI.dispatch(showNotification({error: true, message: CREATE_USER_MESSAGE.error}))
    thunkAPI.rejectWithValue(null)
  }  
})

export const loginUser = createAsyncThunk('loginUser',
  async (userLogin: IUserAuth, thunkAPI) => {

    try {
      
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email: userLogin.email,
        password: userLogin.password
      })

      if (response.status === 201) {
        const value = response.data
        localStorage.setItem('access_token', JSON.stringify(value['access_token']))
        thunkAPI.dispatch(fetchUserSession())
        return value
      } else {
        thunkAPI.dispatch(showNotification({error: true, message: LOGIN_USER_MESSAGE.error}))
      }    
    } catch (error: unknown) {      
      thunkAPI.dispatch(showNotification({error: true, message: LOGIN_USER_MESSAGE.error}))
    }
   
})

export const updateUser = createAsyncThunk('updateUser',
  async (newFields: IUpdateUser, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${newFields.id}`, {
        email: newFields.email,
        name: newFields.fullName,
      })

      if(response.status == 200) {
        thunkAPI.dispatch(showNotification({error: false, message:  UPDATE_USER_MESSAGE.success}))
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data    
      } 
      thunkAPI.dispatch(showNotification({error: false, message: UPDATE_USER_MESSAGE.error}))   
      return null     
    } catch (error: any) {
      thunkAPI.dispatch(showNotification({error: true, message:  UPDATE_USER_MESSAGE.error}))
      const err = error as AxiosError
      console.error("Error in updateUser -> ", err.message)
      return null   
    }
  }
)