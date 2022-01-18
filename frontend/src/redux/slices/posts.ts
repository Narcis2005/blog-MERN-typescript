import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import api from "../../utils/api";
import { multiplePostsResponse } from "../types/post";

interface params {
  page: number;
  perPage: number;
}

export const getPosts = createAsyncThunk<
    multiplePostsResponse,
    params
>('posts/getPosts', async ({page, perPage}, thunkApi) => {
        try {
            const result  = (await api.get("/post/posts", {params: {
              page: page,
              perPage: perPage
            }})).data;
         return result;
    } catch (error ) {
        // check if the error was thrown from axios
        if (axios.isAxiosError(error)) {
    
          return thunkApi.rejectWithValue(error.response?.data)
        } 
        throw error;
    }  
})

interface stateInterface {
    result: multiplePostsResponse | null;
    error?: any;
    loading: boolean;
}

const initialState: stateInterface = {
    result: null,
    error: null,
    loading: false
}
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.result = payload;
      state.loading = false;
      state.error = null;
    })
    builder.addCase(getPosts.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      } else {
        state.error = action.error.message
      }
      state.loading = false;
    })
  },
})

export default postsSlice.reducer;