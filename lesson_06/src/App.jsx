import React, { useState } from "react";

import Statistics from "./components/Statistics/Statistics";
import List from "./components/List/List";
import ThemeSelect from "./components/ThemeSelect/ThemeSelect";
import Counter from './components/Counter/Counter'
import TodosList from './components/Todos/TodosList'

import { THEME_LIGHT } from "./constants/theme";

import ThemeContext from "./context/ThemeContext";
import ListContext from "./context/ListContext";

export default function App() {
  const [list, setList] = useState([]);
  const [theme, setTheme] = useState(THEME_LIGHT);

  return (
    <>
      {/* <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeSelect />

        <ListContext.Provider value={{ list, setList }}>
          <Statistics />
          <List />
        </ListContext.Provider>
      </ThemeContext.Provider> */}

      {/* <Counter /> */}

      <TodosList />
    </>
  );
}