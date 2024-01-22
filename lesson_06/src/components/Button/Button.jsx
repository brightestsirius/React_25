import React, { useContext } from "react";

import { THEME_LIGHT } from "../../constants/theme";

import ThemeContext from "../../context/ThemeContext";

export default function Button({ title, clickFn }) {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      onClick={clickFn}
      style={{ borderColor: theme === THEME_LIGHT ? `black` : `lightpink` }}
    >
      {title}
    </button>
  );
}
