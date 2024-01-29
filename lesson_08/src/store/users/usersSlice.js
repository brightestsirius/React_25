import { createSlice } from "@reduxjs/toolkit";
import thunks from "./thunks";

export const usersSlice = createSlice({
  name: `users`,
  initialState: {
    users: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(thunks.setUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })
      .addCase(thunks.setUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunks.deleteUser.fulfilled, (state, { payload }) => {
        state.users = state.users.filter((item) => item.id !== payload);
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
