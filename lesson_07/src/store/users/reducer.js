import { SET_USERS, DELETE_USER } from "./actions";

const INITIAL_STATE = {
  users: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return { ...state, users: payload };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export { INITIAL_STATE, reducer };
