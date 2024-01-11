import React, { useState } from "react";

import TodosList from "./TodosList";
import TodosForm from "./TodosForm";
import TodosStatistics from "./TodosStatistics";
import TodosColorPicker from "./TodosColorPicker";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function Todos() {
  const [addedTodo, setAddedTodo] = useState({});
  const [todosList, setTodosList] = useState([]);
  const [color, setColor] = useState(`#000`);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 2 }}>
        <TodosForm setAddedTodo={setAddedTodo} />
        <TodosColorPicker color={color} setColor={setColor} />
        <TodosStatistics todosList={todosList} />
        <TodosList
          addedTodo={addedTodo}
          setTodosList={setTodosList}
          color={color}
        />
      </Paper>
    </Container>
  );
}
