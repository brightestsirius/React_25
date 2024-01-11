import React from "react";

export default function TodosStatistics({ todosList }) {
  return (
    <ul>
      <li>All: {todosList.length}</li>
      <li>Completed: {todosList.filter((item) => item.completed).length}</li>
      <li>In progress:{todosList.filter((item) => !item.completed).length} </li>
    </ul>
  );
}