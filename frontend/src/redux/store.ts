import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/posts";
import postReducer from "./slices/post";
import userReducer from "./slices/auth";
const store = configureStore({
    reducer: {
        posts: postsReducer,
        post: postReducer,
        auth: userReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
