import {SET_TODOS, ITEM_DELETE} from './actions'

const INITIAL_STATE = {
  todos: []
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_TODOS:
        return {...state, todos: payload};
    case ITEM_DELETE:
        return {...state, todos: state.todos.filter(item => item.id !== payload)}
    default:
      return state;
  }
};

export { INITIAL_STATE, reducer };
