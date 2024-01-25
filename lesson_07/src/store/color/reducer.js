import { SET_COLOR } from "./actions";

const INITIAL_STATE = {
  color: `#663399`,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_COLOR:
      return { ...state, color: payload };
    default:
      return state;
  }
};

export { INITIAL_STATE, reducer };
