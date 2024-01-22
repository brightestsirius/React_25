// action types
const COUNTER_DECREMENT = `COUNTER_DECREMENT`;
const COUNTER_INCREMENT = `COUNTER_INCREMENT`;
const COUNTER_SET = `COUNTER_SET`;

// actions
const COUNTER_DECREMENT_ACTION = { type: COUNTER_DECREMENT };
const COUNTER_INCREMENT_ACTION = { type: COUNTER_INCREMENT };
const COUNTER_SET_ACTION = (payload) => ({ type: COUNTER_SET, payload });

export {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_SET,
  COUNTER_DECREMENT_ACTION,
  COUNTER_INCREMENT_ACTION,
  COUNTER_SET_ACTION,
};