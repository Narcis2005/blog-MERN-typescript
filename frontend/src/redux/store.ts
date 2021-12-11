import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/posts'
import postReducer from './slices/post'
 const store = configureStore({
  reducer: {
      posts: postsReducer,
      post: postReducer
  },
})
export type RootState = ReturnType<typeof store.getState>;
export default store;