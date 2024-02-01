import { SET_POSTS, DELETE_POST, SET_SELECTED_USER, SET_FILTERED_POSTS } from "./actions";

import { SELECTED_ALL } from "./../../constants/posts";

const INITIAL_STATE = {
  posts: [],
  filteredPosts: [],
  selectedUser: SELECTED_ALL,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== payload),
        selectedUser: SELECTED_ALL
      };
    case SET_SELECTED_USER:
      return { ...state, selectedUser: payload };
    case SET_FILTERED_POSTS:
      if(state.selectedUser === SELECTED_ALL) return {...state, filteredPosts: state.posts}
      else return {...state, filteredPosts: state.posts.filter(item => item.userName === state.selectedUser)}
    default:
      return state;
  }
};

export { reducer, INITIAL_STATE };
