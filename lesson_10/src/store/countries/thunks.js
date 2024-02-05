import { createAsyncThunk } from "@reduxjs/toolkit";
import { sliceName } from "./constants";

import service from "./../../services/countries";

const thunks = {
  fetchCountries: createAsyncThunk(`${sliceName}/fetchCountries`, async () => {
    const response = await service.get();
    return response;
  }),
  fetchCountry: createAsyncThunk(`${sliceName}/fetchCountry`, async (id) => {
    const response = await service.get(id);
    return response;
  }),
  fetchDeleteCountry: createAsyncThunk(`${sliceName}/fetchDeleteCountry`, async (id) => {
    service.delete(id);
    return id;
  }),
};

export default thunks;