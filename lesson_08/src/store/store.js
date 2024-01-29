import { configureStore } from "@reduxjs/toolkit";

import logger from 'redux-logger'

import users from "./users/slice";
import filter from "./filter/reducer";

export const store = configureStore({
  reducer: { users, filter },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});