import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios";
export interface postObj  {
    title: string;
    img: string;
    descriere: string;
}
interface KnownError {
    message: string;
}

export const getPost = createAsyncThunk<
    postObj,
    string,
    {rejectValue: KnownError}
    
>('posts/getPost', async (slug, thunkApi) => {
        try {
            const result  = await (await axios.get(`http://localhost:5000/api/post/${slug}`)).data;
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
    result: postObj;
    error?: any;
    loading: boolean;
}

const initialState: stateInterface = {
    result: {
        title: "",
        img: "",
        descriere: "",
    },
    error: null,
    loading: true
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