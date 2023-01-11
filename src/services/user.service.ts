import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUpdateUser, IUserAuth, IUserRegister } from "../models";
import { showNotification } from "../redux/slices";
import { BASE_URL, CREATE_USER_MESSAGE, LOGIN_USER_MESSAGE, UPDATE_USER_MESSAGE } from "../utilities/constants";

const userServices = axios.create({
  baseURL: BASE_URL
})

export const fetchUserProfile = createAsyncThunk('fetchUserProfile',
  async (token: string, thunkAPI) => {
  try {      
      const response = await userServices.get('/auth/profile', {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })
    if(response.status === 200) {
      thunkAPI.dispatch(showNotification({error: false, message: LOGIN_USER_MESSAGE.success}))
      return response.data
    }
    thunkAPI.dispatch(showNotification({error: true, message: LOGIN_USER_MESSAGE.error}))
    return null
  } catch (error: any) {    
    thunkAPI.dispatch(showNotification({error: true, message: LOGIN_USER_MESSAGE.error}))
    return null
  }
})

export const fetchUserSession = createAsyncThunk('fetchUserSession',
  async (_, thunkAPI) => {
  const token = localStorage.getItem('access_token')
  if(token != null) {
    thunkAPI.dispatch(fetchUserProfile(JSON.parse(token)))     
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
    } else {
      thunkAPI.dispatch(showNotification({error: true, message: CREATE_USER_MESSAGE.error}))
    }
  } catch (error: any) {
    thunkAPI.dispatch(showNotification({error: true, message: CREATE_USER_MESSAGE.error}))
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
      localStorage.setItem('access_token', JSON.stringify(value['access_token']))
      thunkAPI.dispatch(fetchUserSession())
    } else {
      thunkAPI.dispatch(showNotification({error: true, message: LOGIN_USER_MESSAGE.error}))
    }    
  } catch (error: any) {
    thunkAPI.dispatch(showNotification({error: true, message: LOGIN_USER_MESSAGE.error}))    
  }
})

export const updateUser = createAsyncThunk('updateUser',
  async (newFields: IUpdateUser, thunkAPI) => {
    try {
      const response = await userServices.put(`/users/${newFields.id}`, {
        email: newFields.email,
        name: newFields.fullName,
      })
      if(response.status == 200) {
        thunkAPI.dispatch(showNotification({error: false, message:  UPDATE_USER_MESSAGE.success}))
        thunkAPI.dispatch(fetchUserSession())        
      } else {
        thunkAPI.dispatch(showNotification({error: false, message: UPDATE_USER_MESSAGE.error}))
      }  
    } catch (error: any) {
      thunkAPI.dispatch(showNotification({error: true, message:  UPDATE_USER_MESSAGE.error}))      
    }
  }
)