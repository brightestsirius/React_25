import { SET_TEXT } from "./actions";

const INITIAL_STATE = {
  text: `Default text`,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TEXT:
      return { ...state, text: payload };
    default:
      return state;
  }
};

export { INITIAL_STATE, reducer };
