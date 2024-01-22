import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_SET } from "./actions";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  if (action.type === COUNTER_DECREMENT) {
    return { ...state, counter: state.counter - 1 };
  }
  if (action.type === COUNTER_INCREMENT) {
    return { ...state, counter: state.counter + 1 };
  }
  if (action.type === COUNTER_SET) {
    return { ...state, counter: +action.payload };
  }
  return state;
};

export { initialState, reducer };
