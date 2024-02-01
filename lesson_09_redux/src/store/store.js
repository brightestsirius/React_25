import { configureStore } from "@reduxjs/toolkit";

import posts from "./posts/slice";
import users from "./users/slice";

export const store = configureStore({
  reducer: { posts, users },
});
