import React, { useState, useEffect } from "react";

import TodoListItem from "./TodoListItem";

import service from '../../../services/todos'

export default function TodoList({createdTodo}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      setTodos(response.slice(0, 10));
    })();
  }, []);

  useEffect(() => {
    // console.log(`in useEffect for createdTodo`, createdTodo);
    if(Object.keys(createdTodo).length) {
      setTodos(prevState => [...prevState, createdTodo])
    }
  }, [createdTodo])

  const handleItemDelete = async (id) => {
    try {
      await service.delete(id);
      setTodos((prevState) => prevState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemComplete = async (item) => {
    let response = await service.patch(item.id, {completed: !item.completed});

    setTodos((prevState) =>
      prevState.map((el) => {
        if (el.id === response.id) el = response;
        return el;
      })
    );
  };

  return todos.length ? (
    <ul>
      {todos.map((item, index) => (
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
