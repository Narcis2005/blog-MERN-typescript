import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import api from "../../utils/api";
import {userInterface, KnownError} from "../types/auth"


export const getUserByToken = createAsyncThunk<
    userInterface,
    string,
    {rejectValue: KnownError}
    
>('auth/getUserByToken', async (token, thunkApi) => {
        try {
            const result  =  (await api.get(`/auth/getuser`, {params: {token:token}})).data;
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
    result: userInterface | null;
    error?: any;
    token: string;
    loading: boolean;
}

const initialState: stateInterface = {
    result: null,
    error: null,
    token: "",
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
    })
    builder.addCase(getUserByToken.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error.message
      }
      state.loading = false;
    })
    builder.addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.result = payload;
      state.loading = false;
      state.error = null;
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error.message
      }
      state.loading = false;
    })
  },
})

export default userSlice.reducer;