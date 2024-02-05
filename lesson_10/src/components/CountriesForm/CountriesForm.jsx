import React from "react";
import "./style.sass";

import { useNavigate } from "react-router-dom";

import useCountries from "./../../hooks/useCountries";
import useCountriesForm from "./../../hooks/useCountriesForm";

export default function CountriesForm() {
  const { countries } = useCountries();
  const {
    selectedCountry,
    selectedTranslation,
    selectCountry,
    selectTranslation,
  } = useCountriesForm(countries);

  const handleSelectCountry = (e) => selectCountry(e.target.value);

  const handleSelectTranslation = (e) => selectTranslation(e.target.value);

  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`countries/${selectedCountry.id}?trans=${selectedTranslation}`);
  };

  return countries.length && selectedCountry ? (
    <form className="component form" onSubmit={handleSubmit}>
      <label>
        Select capital:{" "}
        <select value={selectedCountry.id} onChange={handleSelectCountry}>
          {countries.map((item) => (
            <option key={item.id} value={item.id}>
              {item.flag} {item.capital[0]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Select translation:{" "}
        {selectedTranslation ? (
          <select
            onChange={handleSelectTranslation}
            value={selectedTranslation}
          >
            {Object.keys(selectedCountry.translations).map((key, index) => (
              <option key={index} value={key}>
                {key}
              </option>
            ))}
          </select>
        ) : null}
      </label>
      <button>Get info about {selectedCountry.name.official}</button>
    </form>
  ) : null;
}
