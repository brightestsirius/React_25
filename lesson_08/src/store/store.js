import { configureStore } from "@reduxjs/toolkit";

import users from "./users/usersSlice";
import filter from "./filter/reducer";

import logger from 'redux-logger'

export default configureStore({
  reducer: { users, filter },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});