import React, { useContext } from "react";

import TodosContext from "../../context/TodosContext";

export default function TodosStatistics() {
  const { state } = useContext(TodosContext);

  return (
    <ul>
      <li>All: {state.todos.length}</li>
      <li>Completed: {state.todos.filter((item) => item.completed).length}</li>
      <li>
        Non-Completed: {state.todos.filter((item) => !item.completed).length}
      </li>
    </ul>
  );
}
