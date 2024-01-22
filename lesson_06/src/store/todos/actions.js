// action type
const SET_TODOS = `SET_TODOS`;
const ITEM_DELETE = `ITEM_DELETE`;

// actions
const SET_TODOS_ACTION = (payload) => ({type: SET_TODOS, payload});
const ITEM_DELETE_ACTION = (payload) => ({type: ITEM_DELETE, payload});

export {SET_TODOS, ITEM_DELETE, SET_TODOS_ACTION, ITEM_DELETE_ACTION};