import React, { useState } from "react";

import TodosList from "./TodosList";
import TodosForm from "./TodosForm";
import TodosStatistics from './TodosStatistics'

export default function Todos() {
  const [addedTodo, setAddedTodo] = useState({});
  const [todosList, setTodosList] = useState([]);

  return (
    <div>
      <TodosForm setAddedTodo={setAddedTodo} />
      <TodosStatistics todosList={todosList} />
      <TodosList addedTodo={addedTodo} setTodosList={setTodosList} />
    </div>
  );
}