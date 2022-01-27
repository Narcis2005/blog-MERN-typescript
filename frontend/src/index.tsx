import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./redux/slices/posts";
import postReducer from "./redux/slices/post";
import userReducer from "./redux/slices/auth";

const reducer = {
    posts: postsReducer,
    post: postReducer,
    auth: userReducer,
};

export const store = configureStore({
    reducer,
});
export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);

export {};
