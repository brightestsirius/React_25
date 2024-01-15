import React, { useState, useEffect, useMemo } from "react";

import TodoListItem from "./TodoListItem";

import service from '../../../services/todos'

import {TODOS_FILTER_COMPLITED, TODOS_FILTER_PROGRESS} from './../../../constants/todos'

export default function TodoList({createdTodo, todosFilter}) {
  const [todos, setTodos] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  
  useMemo(() => todos.sort((a,b) => b.completed - a.completed), [todos]);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      setTodos(response.slice(0, 10));
    })();
  }, []);

  useEffect(() => {
    if(Object.keys(createdTodo).length) {
      setTodos(prevState => [...prevState, createdTodo])
    }
  }, [createdTodo]);

  useEffect(() => {
    switch(todosFilter){
      case TODOS_FILTER_COMPLITED:
        setFilteredList(todos.filter(item => item.completed));
        break;
      case TODOS_FILTER_PROGRESS:
        setFilteredList(todos.filter(item => !item.completed));
        break;
      default:
        setFilteredList(todos);

    }
  }, [todosFilter, todos]);

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

  return filteredList.length ? (
    <ul>
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
