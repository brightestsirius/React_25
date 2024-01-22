import React, { useReducer, useEffect } from "react";

import { reducer, INITIAL_STATE } from "../../store/todos/reducer";
import {
  SET_TODOS_ACTION,
  ITEM_DELETE_ACTION,
} from "./../../store/todos/actions";

import service from "../../services/todos";

export default function TodosList() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      dispatch(SET_TODOS_ACTION(response.splice(0, 10)));
    })();
  }, []);

  const handleItemDelete = async (id) => {
    await service.delete(id);
    dispatch(ITEM_DELETE_ACTION(id));
  };

  return state.todos.length ? (
    <ul>
      {state.todos.map((item) => (
        <li key={item.id}>
          {item.title}{" "}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
