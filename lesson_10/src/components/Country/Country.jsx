import React from "react";

import { useParams, useSearchParams } from "react-router-dom";

import useCountry from "./../../hooks/useCountry";

export default function Country() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const lang = searchParams.get(`lang`);

  const { country, deleteCountry } = useCountry(id);

  const handleDelete = () => deleteCountry();

  return country ? (
    <>
      <h4>{lang ? country.translations[lang].common : country.name.common}</h4>
      <ul>
        {Object.keys(country).map((k, index) => (
          <li key={index}>
            {k}:{" "}
            {Array.isArray(country[k]) ? (
              country[k].join(`, `)
            ) : typeof country[k] === `object` ? (
              <ul>
                {Object.keys(country[k]).map((key, i) => (
                  <li key={i}>{key}</li>
                ))}
              </ul>
            ) : (
              country[k]
            )}
          </li>
        ))}
      </ul>
      <button onClick={handleDelete}>Delete country</button>
    </>
  ) : null;
}
