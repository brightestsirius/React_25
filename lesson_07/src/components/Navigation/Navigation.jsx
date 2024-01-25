import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={(e) => (e.isActive ? `nav__item--active` : `nav__item`)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__item" to="/posts">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__item" to="/users">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
