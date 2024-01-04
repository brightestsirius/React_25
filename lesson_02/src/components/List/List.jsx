import React from "react";

export default function List({ list = [] }) {

    setTimeout(() => {
        list.push(`tiger`);
        console.log(list);
    }, 1000);


  return Array.isArray(list) && list.length ? (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : null;
}
