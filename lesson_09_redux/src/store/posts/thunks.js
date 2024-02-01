import { createAsyncThunk } from "@reduxjs/toolkit";
import { sliceName } from "./constants";

import service from "./../../services/posts";

const thunks = {
  fetchPosts: createAsyncThunk(`${sliceName}/fetchPosts`, async () => {
    const response = await service.get();
    return response;
  }),
  deletePost: createAsyncThunk(`${sliceName}/deletePost`, async (id) => {
    await service.delete(id);
    return id;
  }),
};

export default thunks;
