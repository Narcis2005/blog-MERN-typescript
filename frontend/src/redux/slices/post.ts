import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../utils/api";
import { postInterface, KnownError } from "../types/post";

export const getPost = createAsyncThunk<postInterface, string, { rejectValue: KnownError }>(
    "posts/getPost",
    async (slug, thunkApi) => {
        try {
            const result = (await api.get(`/post/post/${slug}`)).data as postInterface;
            return result;
        } catch (error) {
            // check if the error was thrown from axios
            if (axios.isAxiosError(error)) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                return thunkApi.rejectWithValue(error.response?.data);
            }
            throw error;
        }
    },
);

interface stateInterface {
    result: postInterface | null;
    error?: any;
    status: "idle" | "loading" | "success" | "failed";
}

const initialState: stateInterface = {
    result: null,
    error: null,
    status: "idle",
};
const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPost.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(getPost.fulfilled, (state, { payload }) => {
            state.result = payload;
            state.status = "success";
            state.error = null;
        });
        builder.addCase(getPost.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = action.error.message;
            }
            state.status = "failed";
        });
    },
});

export default postSlice.reducer;
