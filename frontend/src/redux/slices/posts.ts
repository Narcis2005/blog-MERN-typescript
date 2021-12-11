import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
export interface postObj  {
    title: string;
    img: string;
    descriere: string;
}
type result = postObj[];


export const getPosts = createAsyncThunk<
    result,
    void
>('posts/getPosts', async (_, thunkApi) => {
        try {
            const result  = await (await axios.get("http://localhost:5000/api/posts")).data;
         return result;
    } catch (error ) {
        throw error;
    }  
})

interface stateInterface {
    result: result;
    error?: any;
    loading: boolean;
}

const initialState: stateInterface = {
    result: [],
    error: null,
    loading: true
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