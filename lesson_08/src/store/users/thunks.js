import service from "./../../services/users";

import { createAsyncThunk } from "@reduxjs/toolkit";

const thunks = {
  setUsers: createAsyncThunk("users/setUsers", async () => await service.get()),
  deleteUser: createAsyncThunk("users/deleteUser", async (id) => {
    await service.delete(id);
    return id;
  }),
  changeUser: createAsyncThunk("users/changeUser", async (item) => {
    const response = await service.put(item.id, { active: !item.active });
    return response;
  }),
};

export default thunks;