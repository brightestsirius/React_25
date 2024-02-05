import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setCountry, setTranslation } from "./../store/countries/slice";

export default function useCountryForm(countries) {
  const { country, translation } = useSelector((state) => state.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCountry());
    dispatch(setTranslation());
  }, [countries]);

  const handleSelectCountry = (e) => {
    dispatch(setCountry(e.target.value));
    dispatch(setTranslation());
  };

  const handleSelectTranslation = (e) =>
    dispatch(setTranslation(e.target.value));

  return {
    country,
    translation,
    handleSelectCountry,
    handleSelectTranslation,
  };
}
