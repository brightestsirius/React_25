import React, { useState, useEffect } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(
            `https://jsonplaceholder.typicode.com/todos`
          ),
          response = await request.json();

        setTodos(response.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  ) : null;
}
