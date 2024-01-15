import React from "react";

import TodoListItem from "./TodoListItem";

import useTodos from "../../../hooks/useTodos";

export default function TodoList({ createdTodo, todosFilter, todosColor }) {
  const [filteredList, handleItemDelete, handleItemComplete] = useTodos(
    createdTodo,
    todosFilter
  );

  return filteredList.length ? (
    <ul style={{ color: todosColor }}>
      {filteredList.map((item, index) => (
        <TodoListItem
          key={index}
          item={item}
          handleItemDelete={() => handleItemDelete(item.id)}
          handleItemComplete={handleItemComplete}
        />
      ))}
    </ul>
  ) : null;
}
