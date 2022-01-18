import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import api from "../../utils/api";
import {userInterface, KnownError} from "../types/auth"

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, thunkApi) => {
  localStorage.removeItem("token");
  return true;
})
export const getUserByToken = createAsyncThunk<
    userInterface,
    void,
    {rejectValue: KnownError}
    
>('auth/getUserByToken', async (_, thunkApi) => {
  const token = localStorage.token;
      if(!token){
        throw new Error;
      }

        try {
            const result  =  (await api.get(`/auth/getuser`)).data;
         return result;
    } 
    catch (error) {
        // check if the error was thrown from axios
        if (axios.isAxiosError(error)) {
          if(localStorage.token){
            localStorage.removeItem("token");
          }
          return thunkApi.rejectWithValue(error.response?.data)
        } 
        throw error;
        
    }
})

export const loginUser = createAsyncThunk<
    userInterface,
    {
        username: string;
        password: string;
    },
    {rejectValue: KnownError}
    
>('auth/loginUser', async (profile, thunkApi) => {
        try {
            const result  =  await api.post(`/auth/login`, profile);
        if(result.status == 200){
            localStorage.setItem('token', result.data.token);
        }
         return result.data;
    } 
    catch (error) {
        // check if the error was thrown from axios
        if (axios.isAxiosError(error)) {
          
          return thunkApi.rejectWithValue(error.response?.data)
        } 
        throw error;
        
    }
})
interface stateInterface {
    result: userInterface ;
    error?: any;
    token: string;
    isAuthentificated: boolean;
    loading: boolean;
}

const initialState: stateInterface = {
    result: {
      username: "",
      fullName: "",
      email: "",
      id: "",
      imageURL: ""
    },
    error: null,
    token: "",
    isAuthentificated: false,
    loading: true
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserByToken.pending, (state) => {
        state.loading = true;
      })
    builder.addCase(getUserByToken.fulfilled, (state, { payload }) => {
      state.result = payload;
      state.error = null;
      state.loading = false;
      state.isAuthentificated = true;
    })
    builder.addCase(getUserByToken.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error.message
      }
      state.loading = false;
      state.isAuthentificated = false;
    })
    builder.addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.result = payload;
      state.loading = false;
      state.error = null;
      state.isAuthentificated = true;
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error.message
      }
      state.loading = false;
      state.isAuthentificated = false;
    })
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.result= {
          username: "",
          fullName: "",
          email: "",
          id: "",
          imageURL: ""
        };
      state.error= null;
      state.token= "";
      state.isAuthentificated= false;
      state.loading= false;
    })
    
  },
})

export default userSlice.reducer;