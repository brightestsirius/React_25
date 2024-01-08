import React, { useState } from "react";
import "./style.sass";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const decrement = () => setCounter(counter - 1);

  const increment = () => setCounter(counter + 1);

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
