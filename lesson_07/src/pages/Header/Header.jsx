import React from "react";
import "./style.sass";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink className="menu__item" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to="/posts">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
