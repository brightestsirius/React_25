import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import thunks from "../store/countries/thunks";

export default function useCountry(id) {
  const { country } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.fetchCountry(id));
  }, []);

  const deleteCountry = () => {
    dispatch(thunks.fetchDeleteCountry(id));
  };

  return { country, deleteCountry };
}
