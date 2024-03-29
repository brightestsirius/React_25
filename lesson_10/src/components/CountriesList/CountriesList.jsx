import React from "react";

import {Link} from 'react-router-dom'

import useCountries from "./../../hooks/useCountries";

export default function CountriesList() {
  const { countries } = useCountries();

  return (
    <div className="component">
      <ul>
        {countries.map((item) => (
          <li key={item.id}>
            <Link to={String(item.id)}>{item.flag} {item.name.official}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
