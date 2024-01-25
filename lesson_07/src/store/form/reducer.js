import { SET_TEXT } from "./actions";

const INITIAL_STATE = {
  form: `Defalut text`,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TEXT:
      return { ...state, form: payload };
    default:
      return state;
  }
};

export { INITIAL_STATE, reducer };
