import React, { useState, useReducer } from "react";

import List from "./components/List/List";
import ThemeSelect from "./components/ThemeSelect/ThemeSelect";
import Statistics from "./components/Statistics/Statistics";

import Counter from "./components/Counter/Counter";

import Todos from "./components/Todos/Todos";
import TodosStatistics from "./components/Todos/TodosStatistics";

import { THEME_LIGHT } from "./constants/theme";

import ThemeContext from "./context/ThemeContext";
import ListContext from "./context/ListContext";
import TodosContext from "./context/TodosContext";

import { initialState, reducer } from "./store/todos/reducer";

export default function App() {
  const [theme, setTheme] = useState(THEME_LIGHT);
  const [list, setList] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeSelect />
        <ListContext.Provider value={{ list, setList }}>
          <Statistics />
          <List />
        </ListContext.Provider>
      </ThemeContext.Provider>
      <hr />
      <Counter />
      <hr />
      <TodosContext.Provider value={{ state, dispatch }}>
        <TodosStatistics />
        <Todos />
      </TodosContext.Provider>
    </>
  );
}
