import React from "react";
import "./style.sass";

import { useNavigate } from "react-router-dom";

import useCountries from "./../../hooks/useCountries";
import useCountryForm from "./../../hooks/useCountryForm";

export default function CountriesForm() {
  const { countries } = useCountries();
  const { country, translation, handleSelectCountry, handleSelectTranslation } =
    useCountryForm(countries);

  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigation(`/countries/${country.id}?lang=${translation}`);
  };

  return countries.length && country ? (
    <form className="component form" onSubmit={handleSubmit}>
      <label>
        Choose capital:{" "}
        <select onChange={handleSelectCountry}>
          {countries.map((item) => (
            <option key={item.id} value={item.id}>
              {item.flag} {item.capital[0]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Select translation:{" "}
        <select onChange={handleSelectTranslation}>
          {Object.keys(country.translations).map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <button>Get info about {country.name.official}</button>
    </form>
  ) : null;
}