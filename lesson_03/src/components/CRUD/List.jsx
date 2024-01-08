import React, { useState, useEffect } from "react";

export default function List() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      let request = await fetch(`https://jsonplaceholder.typicode.com/todos`),
        response = await request.json();

      setTodos(response.slice(0, 10));
    })();
  }, []);

  const handleRemove = async (e, id) => {
    e.stopPropagation();
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: `DELETE`,
      });
      setTodos(todos.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleActivate = async (item) => {
    let request = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${item.id}`,
        {
          method: `PATCH`,
          body: JSON.stringify({ completed: !item.completed }),
          headers: {
            "Content-type": "application/json",
          },
        }
      ),
      response = await request.json();

    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.id === response.id) item = response;
        return item;
      })
    );
  };

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li
          key={item.id}
          style={{ color: item.completed ? `green` : `orange` }}
          onClick={() => handleActivate(item)}
        >
          {item.title}{" "}
          <button onClick={(e) => handleRemove(e, item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  ) : null;
}
