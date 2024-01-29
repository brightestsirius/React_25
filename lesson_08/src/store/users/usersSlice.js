import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: `users`,
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((item) => item.id !== payload);
    },
    changeUser: (state, { payload }) => {
      state.users = state.users.map((item) => {
        if (item.id === payload.id) item = payload;
        return item;
      });
    },
  },
});

export const { setUsers, deleteUser, changeUser } = usersSlice.actions;

export default usersSlice.reducer;