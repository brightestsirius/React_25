import React, { useEffect, useContext } from "react";

import { setTodosAction, itemDeleteAction } from "./../../store/todos/actions";

import TodosContext from "../../context/TodosContext";

import service from "./../../services/todos";

export default function Todos() {
  const { state, dispatch } = useContext(TodosContext);

  useEffect(() => {
    (async () => {
      let response = await service.get();
      dispatch(setTodosAction(response.splice(0, 10)));
    })();
  }, []);

  const handleDelete = async (id) => {
    await service.delete(id);
    dispatch(itemDeleteAction(id));
  };

  return state.todos.length ? (
    <ul>
      {state.todos.map((item) => (
        <li key={item.id}>
          {item.title}{" "}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
