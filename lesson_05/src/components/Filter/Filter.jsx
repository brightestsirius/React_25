import React from "react";
import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLITED,
  TODOS_FILTER_PROGRESS,
} from "./../../constants/todos";

export default function Filter({ todosFilter, setTodosFilter }) {
  const handleSelect = (e) => setTodosFilter(e.target.value);
  return (
    <select defaultValue={todosFilter} onChange={handleSelect}>
      <option value={TODOS_FILTER_ALL}>All</option>
      <option value={TODOS_FILTER_COMPLITED}>Completed</option>
      <option value={TODOS_FILTER_PROGRESS}>In progress</option>
    </select>
  );
}
