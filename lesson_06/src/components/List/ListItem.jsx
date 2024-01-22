import React, { useContext } from "react";

import Button from "./../Button/Button";

import { THEME_LIGHT } from "./../../constants/theme";

import ThemeContext from "../../context/ThemeContext";

export default function ListItem({ item, handleDelete }) {
  const { theme } = useContext(ThemeContext);
  return (
    <li style={{ color: theme === THEME_LIGHT ? `black` : `lightpink` }}>
      {item.title}{" "}
      <Button title={"Delete"} clickFn={handleDelete} />
    </li>
  );
}
