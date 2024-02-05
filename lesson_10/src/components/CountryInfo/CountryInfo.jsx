import React from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

import useCountry from "./../../hooks/useCountry";

export default function CountryInfo() {
  const { id } = useParams();

  const [searchParams] = useSearchParams();
  const translation = searchParams.get(`trans`);

  const { selectedCountry, deleteCountry } = useCountry(id);

  const navigation = useNavigate();

  const handleDelete = () => {
    deleteCountry(id);
    navigation("/countries");
  };

  return selectedCountry ? (
    <div className="component">
      <ul>
        <li>
          Name:{" "}
          {translation
            ? selectedCountry.translations[translation].common
            : selectedCountry.name.common}
        </li>
        <li>Flag: {selectedCountry.flag}</li>
        <li>Region: {selectedCountry.region}</li>
      </ul>
      <button onClick={handleDelete}>Delet country</button>
    </div>
  ) : null;
}
