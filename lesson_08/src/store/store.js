import { configureStore } from "@reduxjs/toolkit";

import users from "./users/usersSlice";
import filter from "./filter/reducer";

export default configureStore({
  reducer: { users, filter },
});