import React, { useContext } from "react";

import useList from "../../hooks/useList";
import ListItem from "./ListItem";

import { THEME_LIGHT } from "../../constants/theme";

import ThemeContext from "../../context/ThemeContext";

export default function List() {
  const [list, handleDelete] = useList();
  const { theme } = useContext(ThemeContext);

  return list.length ? (
    <ul style={{ background: theme === THEME_LIGHT ? `lightpink` : `black` }}>
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleDelete={() => handleDelete(item.id)}
        />
      ))}
    </ul>
  ) : null;
}
