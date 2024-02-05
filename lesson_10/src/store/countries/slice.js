import { createSlice } from "@reduxjs/toolkit";
import { sliceName } from "./constants";
import thunks from "./thunks";

const initialState = {
  countries: [],
  country: null,
  translation: null,
};

export const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setCountry(state, { payload }) {
      state.country = payload
        ? state.countries.find((item) => item.id === payload)
        : state.countries.length
        ? state.countries[0]
        : null;
    },
    setTranslation(state, { payload }) {
      if (payload) {
        state.translation = payload;
      } else if (state.country) {
        state.translation = Object.keys(state.country.translations)[0];
      } else if (state.countries.length) {
        state.translation = Object.keys(state.countries[0].translations)[0];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchCountries.fulfilled, (state, { payload }) => {
        state.countries = payload;
      })
      .addCase(thunks.fetchCountry.fulfilled, (state, { payload }) => {
        state.country = payload;
      })
      .addCase(thunks.fetchDeleteCountry.fulfilled, (state, { payload }) => {
        state.countries = state.countries.filter((item) => item.id !== payload);
        state.country = null;
      });
  },
});

export const { setCountry, setTranslation } = slice.actions;
export default slice.reducer;
