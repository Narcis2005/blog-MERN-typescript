import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../utils/api";
import { userInterface, KnownError } from "../types/auth";

export const logoutUser = createAsyncThunk("auth/logoutUser", () => {
    localStorage.removeItem("token");
    return true;
});
export const getUserByToken = createAsyncThunk<userInterface, void, { rejectValue: KnownError }>(
    "auth/getUserByToken",
    async (_, thunkApi) => {
        const token = localStorage.token as string;
        if (!token) {
            throw new Error();
        }
        try {
            const result = (await api.get(`/auth/getuser`)).data as userInterface;
            return result;
        } catch (error) {
            // check if the error was thrown from axios
            if (axios.isAxiosError(error)) {
                if (localStorage.token) {
                    localStorage.removeItem("token");
                }
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                return thunkApi.rejectWithValue(error.response?.data);
            }
            throw error;
        }
    },
);

export const loginUser = createAsyncThunk<
    userInterface,
    {
        username: string;
        password: string;
    },
    { rejectValue: KnownError }
>("auth/loginUser", async (profile, thunkApi) => {
    try {
        const result = await api.post(`/auth/login`, profile);
        if (result.status == 200) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            localStorage.setItem("token", result.data.token);
        }
        return result.data as userInterface;
    } catch (error) {
        // check if the error was thrown from axios
        if (axios.isAxiosError(error)) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            return thunkApi.rejectWithValue(error.response?.data);
        }
        throw error;
    }
});
interface stateInterface {
    result: userInterface;
    error?: any;
    token: string;
    status: "idle" | "loading" | "success" | "failed";
}

const initialState: stateInterface = {
    result: {
        username: "",
        fullName: "",
        email: "",
        id: "",
        imageURL: "",
    },
    error: null,
    token: "",
    status: "idle",
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserByToken.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(getUserByToken.fulfilled, (state, { payload }) => {
            state.result = payload;
            state.error = null;
            state.status = "success";
        });
        builder.addCase(getUserByToken.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = action.error.message;
            }
            state.status = "failed";
        });
        builder.addCase(loginUser.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(loginUser.fulfilled, (state, { payload }) => {
            state.result = payload;
            state.status = "success";
            state.error = null;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = action.error.message;
            }
            state.status = "failed";
        });
        builder.addCase(logoutUser.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.result = {
                username: "",
                fullName: "",
                email: "",
                id: "",
                imageURL: "",
            };
            state.error = null;
            state.token = "";
            state.status = "failed";
        });
    },
});

export default userSlice.reducer;
