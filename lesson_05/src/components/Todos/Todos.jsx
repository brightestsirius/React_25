import React, { useState } from "react";
import "./style.sass";

import TodosForm from "./TodosForm/TodosForm";
import TodoList from "./TodosList/TodoList";
import Filter from "./../Filter/Filter";
import ColorPicker from "./../ColorPicker/ColorPicker";

import { TODOS_FILTER_ALL, TODOS_COLOR } from "../../constants/todos";

import useLocalStorage from "./../../hooks/useLocalStorage";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({});
  const [todosFilter, setTodosFilter] = useLocalStorage(
    `todosFilter`,
    TODOS_FILTER_ALL
  );
  const [todosColor, setTodosColor] = useLocalStorage(
    `todosColor`,
    TODOS_COLOR
  );

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{p: 2}}>
        <TodosForm liftingTodo={setCreatedTodo} />
        <Filter todosFilter={todosFilter} setTodosFilter={setTodosFilter} />
        <ColorPicker todosColor={todosColor} setTodosColor={setTodosColor} />
        <TodoList
          createdTodo={createdTodo}
          todosFilter={todosFilter}
          todosColor={todosColor}
        />
      </Paper>
    </Container>
  );
}
