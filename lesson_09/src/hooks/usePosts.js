import React, { useReducer, useEffect } from "react";

import service from "./../services/posts";
import { reducer, INITIAL_STATE } from "../store/posts/reducer";
import { setPostsAction, deletePostAction, setSelectedUserAction, setFilteredPostsActions } from "./../store/posts/actions";

export default function usePosts() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      dispatch(setPostsAction(response));
    })();
  }, []);

  useEffect(() => {
    dispatch(setFilteredPostsActions());
  }, [state.posts, state.selectedUser])

  const deletePost = async (id) => {
    await service.delete(id);
    dispatch(deletePostAction(id));
  };

  const setSelectedUser = (payload) => dispatch(setSelectedUserAction(payload));

  return { ...state, deletePost, setSelectedUser };
}
