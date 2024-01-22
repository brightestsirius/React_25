// action types
const SET_TODOS = `SET_TODOS`;
const ITEM_DELETE = `ITEM_DELETE`;

// actions
const setTodosAction = (payload) => ({ type: SET_TODOS, payload });
const itemDeleteAction = (payload) => ({ type: ITEM_DELETE, payload });

export { SET_TODOS, ITEM_DELETE, setTodosAction, itemDeleteAction };
