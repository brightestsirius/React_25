import React, { useState } from "react";

import TodosList from "./TodosList";
import TodosForm from "./TodosForm";
import TodosStatistics from './TodosStatistics'
import TodosColorPicker from './TodosColorPicker'

export default function Todos() {
  const [addedTodo, setAddedTodo] = useState({});
  const [todosList, setTodosList] = useState([]);
  const [color, setColor] = useState(`#000`);

  return (
    <div>
      <TodosForm setAddedTodo={setAddedTodo} />
      <TodosColorPicker color={color} setColor={setColor} />
      <TodosStatistics todosList={todosList} />
      <TodosList addedTodo={addedTodo} setTodosList={setTodosList} color={color} />
    </div>
  );
}