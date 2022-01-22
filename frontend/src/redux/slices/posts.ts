import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../utils/api";
import { multiplePostsResponse } from "../types/post";

interface params {
    page: number;
    perPage: number;
}

export const getPosts = createAsyncThunk<multiplePostsResponse, params>(
    "posts/getPosts",
    async ({ page, perPage }, thunkApi) => {
        try {
            const result = (
                await api.get("/post/posts", {
                    params: {
                        page: page,
                        perPage: perPage,
                    },
                })
            ).data as multiplePostsResponse;
            return result;
        } catch (error) {
            // check if the error was thrown from axios
            if (axios.isAxiosError(error)) {
                return thunkApi.rejectWithValue(error.response?.data);
            }
            throw error;
        }
    },
);

interface stateInterface {
    result: multiplePostsResponse | null;
    error?: any;
    status: "idle" | "loading" | "success" | "failed";
}

const initialState: stateInterface = {
    result: null,
    error: null,
    status: "idle",
};
const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(getPosts.fulfilled, (state, { payload }) => {
            state.result = payload;
            state.status = "success";
            state.error = null;
        });
        builder.addCase(getPosts.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = action.error.message;
            }
            state.status = "failed";
        });
    },
});

export default postsSlice.reducer;
