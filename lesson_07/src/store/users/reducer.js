import { SET_USERS } from "./actions";

const INITIAL_STATE = {
  users: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};

export { INITIAL_STATE, reducer };
