import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import api from "../../utils/api";
import {postInterface, KnownError} from "../types/post"


export const getPost = createAsyncThunk<
    postInterface,
    string,
    {rejectValue: KnownError}
    
>('posts/getPost', async (slug, thunkApi) => {
        try {
            const result  =  (await api.get(`/post/post/${slug}`)).data;
         return result;
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
    result: postInterface | null;
    error?: any;
    loading: boolean;
}

const initialState: stateInterface = {
    result: null,
    error: null,
    loading: false
}
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state) => {
        state.loading = true;
      })
    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      state.result = payload;
      state.loading = false;
      state.error = null;
    })
    builder.addCase(getPost.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error.message
      }
      state.loading = false;
    })
  },
})

export default postSlice.reducer;