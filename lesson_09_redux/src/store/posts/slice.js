import { createSlice } from "@reduxjs/toolkit";
import { sliceName } from "./constants";

import thunks from "./thunks";

import { SELECTED_ALL } from "../../constants/users";

const initialState = {
  posts: [],
  filteredPosts: [],
};

export const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setFileteredPosts(state, { payload }) {
      state.filteredPosts =
        payload === SELECTED_ALL
          ? state.posts
          : state.posts.filter((item) => item.userName === payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
      })
      .addCase(thunks.deletePost.fulfilled, (state, { payload }) => {
        state.posts = state.posts.filter((item) => item.id !== payload);
      });
  },
});

export const { setFileteredPosts } = slice.actions;
export default slice.reducer;
