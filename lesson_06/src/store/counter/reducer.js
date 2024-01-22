import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_SET } from "./actions";

const INITIAL_STATE = {
  counter: 0,
  color: `black`,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case COUNTER_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case COUNTER_SET:
      return { ...state, counter: +payload };
    default:
      return state;
  }
};

export { INITIAL_STATE, reducer };
