import React from "react";
import { NavLink } from "react-router-dom";
import "./style.sass";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"countries"}>Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}
