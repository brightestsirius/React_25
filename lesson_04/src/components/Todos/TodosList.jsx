import React, { useState, useEffect } from "react";
import service from "./../../services/todos";

import TodoListItem from "./TodoListItem";

export default function TodosList({ addedTodo, setTodosList }) {
  const [todos, setTodos] = useState([]);
  const [sortedTodos, setSortedTodos] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await service.get();
      setTodos(response.slice(0, 10));
    })();
  }, []);

  useEffect(() => {
    Object.keys(addedTodo).length &&
      setTodos((prevState) => [...prevState, addedTodo]);
  }, [addedTodo]);

  useEffect(() => {
    if (todos.length) {
      setTodosList(todos);
      setSortedTodos(todos.sort((a, b) => b.completed - a.completed));
    }
  }, [todos]);

  const removeItem = async (id) => {
    service.delete(id);
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const completeItem = async (item) => {
    let response = await service.patch(item.id, { completed: !item.completed });

    setTodos((prevState) =>
      prevState.map((el) => {
        if (el.id === response.id) el = response;
        return el;
      })
    );
  };

  return sortedTodos.length ? (
    <ul>
      {sortedTodos.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          completeItem={completeItem}
        />
      ))}
    </ul>
  ) : null;
}
