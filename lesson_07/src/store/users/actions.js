const SET_USERS = `SET_USERS`;
const DELETE_USER = `DELETE_USER`;

const setUsersAction = (payload) => ({ type: SET_USERS, payload });
const deleteItemAction = (payload) => ({ type: DELETE_USER, payload });

export {SET_USERS, DELETE_USER, setUsersAction, deleteItemAction}
