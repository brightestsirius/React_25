const SET_POSTS = `SET_POSTS`;
const DELETE_POST = `DELETE_POST`;
const SET_SELECTED_USER = `SET_SELECTED_USER`;
const SET_FILTERED_POSTS = `SET_FILTERED_POSTS`;

const setPostsAction = (payload) => ({ type: SET_POSTS, payload });
const deletePostAction = (payload) => ({ type: DELETE_POST, payload });
const setSelectedUserAction = (payload) => ({ type: SET_SELECTED_USER, payload });
const setFilteredPostsActions = () => ({ type: SET_FILTERED_POSTS });

export { SET_POSTS, DELETE_POST, SET_SELECTED_USER, SET_FILTERED_POSTS };
export { setPostsAction, deletePostAction, setSelectedUserAction, setFilteredPostsActions };
