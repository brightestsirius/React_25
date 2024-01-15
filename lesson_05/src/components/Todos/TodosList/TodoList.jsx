import React, { useState, useEffect, useMemo, useCallback } from "react";

import TodoListItem from "./TodoListItem";

import service from "../../../services/todos";

export default function TodoList({ createdTodo, color }) {
  const [todos, setTodos] = useState([]);
  // const [sortedTodos, setSortedTodos] = useState([]);

  const sortedTodos = useMemo(() => todos.sort((a, b) => b.completed - a.completed), [todos]);

  const getCompletedTodosCount = useCallback(() => {
    console.log(`in getCompletedTodosCount`);
    return todos.filter(item => item.completed).length;
  }, [todos]);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      setTodos(response.slice(0, 10));
    })();
  }, []);

  useEffect(() => {
    if (Object.keys(createdTodo).length) {
      setTodos((prevState) => [...prevState, createdTodo]);
    }
  }, [createdTodo]);

  useEffect(() => {
    console.log(`in useEffect for getCompletedTodosCount`);
  }, [getCompletedTodosCount])

  // useEffect(() => {
  //   setSortedTodos(todos.sort((a,b) => b.completed-a.completed));
  // }, [todos]);

  const handleItemDelete = async (id) => {
    try {
      await service.delete(id);
      setTodos((prevState) => prevState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemComplete = async (item) => {
    let response = await service.patch(item.id, { completed: !item.completed });

    setTodos((prevState) =>
      prevState.map((el) => {
        if (el.id === response.id) el = response;
        return el;
      })
    );
  };

  return sortedTodos.length ? (
    <>
    <p>Count of completed todos: {getCompletedTodosCount()}</p>
    <ul style={{ color }}>
      {sortedTodos.map((item, index) => (
        <TodoListItem
          key={index}
          item={item}
          handleItemDelete={() => handleItemDelete(item.id)}
          handleItemComplete={handleItemComplete}
        />
      ))}
    </ul>
    </>
  ) : null;
}