import React, { useState } from "react";
import "./style.sass";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const decrement = () => setCounter(counter - 1);

  const increment = () => setCounter(counter + 1);

  const counterTen = () => setCounter(10);

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
      <button onClick={counterTen}>Set 10</button>
    </div>
  );
}