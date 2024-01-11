import React, { useState } from "react";
import service from "./../../services/todos";

export default function TodosForm({ setAddedTodo }) {
  const [newTodo, setNewTodo] = useState({
    title: ``,
    completed: false,
  });

  const setTitle = (e) =>
    setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));

  const setCompleted = (e) =>
    setNewTodo((prevState) => ({ ...prevState, completed: e.target.checked }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await service.post(newTodo);
    setAddedTodo(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:{" "}
        <input type="text" defaultValue={newTodo.title} onChange={setTitle} />
      </label>
      <label>
        Completed:{" "}
        <input
          type="checkbox"
          defaultChecked={newTodo.completed}
          onChange={setCompleted}
        />
      </label>
      <button>Add todo</button>
    </form>
  );
}
