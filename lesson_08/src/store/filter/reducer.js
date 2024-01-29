import { USER_ALL_FILTER } from "./../../constants/users";
import {SET_FILTER} from './actions'

const INITIAL_STATE = {
  filter: USER_ALL_FILTER,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return {...state, filter: payload}
    default:
      return state;
  }
};

export default reducer;
