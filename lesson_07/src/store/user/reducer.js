import { SET_USER } from "./actions";

const INITIAL_STATE = {
  user: {},
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export { INITIAL_STATE, reducer };
