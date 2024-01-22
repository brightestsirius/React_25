import React, { useReducer, useRef } from "react";
import "./style.sass";

import { INITIAL_STATE, reducer } from "./../../store/counter/reducer";

import {
  COUNTER_DECREMENT_ACTION,
  COUNTER_INCREMENT_ACTION,
  COUNTER_SET_ACTION,
} from "./../../store/counter/actions";

export default function Counter() {
  const inputCounter = useRef();

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleDecrement = () => dispatch(COUNTER_DECREMENT_ACTION);

  const handleIncrement = () => dispatch(COUNTER_INCREMENT_ACTION);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(COUNTER_SET_ACTION(inputCounter.current.value));
  };

  return (
    <div className="counter">
      <button onClick={handleDecrement}>-</button>
      <span>{state.counter}</span>
      <button onClick={handleIncrement}>+</button>

      <form onSubmit={handleSubmit}>
        <input type="number" ref={inputCounter} />
      </form>
    </div>
  );
}
