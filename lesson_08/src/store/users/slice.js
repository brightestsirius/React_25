import { createSlice } from "@reduxjs/toolkit";
import {SLICE_NAME} from './constants'

const initialState = {
  users: [],
  isLoading: false,
};

import thunks from "./thunks";

export const usersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.setUsers.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(thunks.setUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })
      .addCase(thunks.changeUser.fulfilled, (state, { payload }) => {
        state.users = state.users.map((item) => {
          if (item.id === payload.id) item = payload;
          return item;
        });
      });
  },
});

export default usersSlice.reducer;
