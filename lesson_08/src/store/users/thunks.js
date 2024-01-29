import service from "./../../services/users";
import { SLICE_NAME } from "./constants";

import { createAsyncThunk } from "@reduxjs/toolkit";

const thunks = {
  setUsers: createAsyncThunk(`${SLICE_NAME}/setUsers`, async () => {
    const response = await service.get();
    return response;
  }),
  changeUser: createAsyncThunk(`${SLICE_NAME}/changeUser`, async (item) => {
    const response = await service.put(item.id, { active: !item.active });
    return response;
  }),
};

export default thunks;
