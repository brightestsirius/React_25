import { createSlice } from "@reduxjs/toolkit";
import { SELECTED_ALL } from "./../../constants/users";
import { sliceName } from "./constants";

const initialState = {
  users: [],
  selectedUser: SELECTED_ALL,
};

export const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setUsersFromPosts(state, { payload }) {
      state.users = payload.map((item) => item.userName);
    },
    setSelectedUser(state, { payload }) {
      state.selectedUser = payload;
    },
  },
});

export const { setUsersFromPosts, setSelectedUser } = slice.actions;
export default slice.reducer;
