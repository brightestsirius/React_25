import React from "react";

import { Link } from "react-router-dom";

import useCountries from "./../../hooks/useCountries";

export default function CountriesList() {
  const { countries } = useCountries();

  return countries.length ? (
    <ul>
      {countries.map((item) => (
        <li key={item.id}>
          <Link to={item.id}>
            {item.flag} {item.name.common}
          </Link>
        </li>
      ))}
    </ul>
  ) : null;
}
