import React from "react";

export default function TodoListItem({ item = {}, removeItem, completeItem }) {
  return (
    <li key={item.id}>
      {item.title}
      <button onClick={() => removeItem(item.id)}>Remove</button>
      <input type="checkbox" defaultChecked={item.completed} onChange={() => completeItem(item)} />
    </li>
  );
}
