import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import thunks from "../store/posts/thunks";
import { setFileteredPosts } from "./../store/posts/slice";

export default function usePosts() {
  const { posts, filteredPosts } = useSelector((state) => state.posts);
  const { selectedUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.fetchPosts());
  }, []);

  useEffect(() => {
    dispatch(setFileteredPosts(selectedUser));
  }, [posts, selectedUser]);

  const deletePost = (id) => {
    dispatch(thunks.deletePost(id));
  };

  return { filteredPosts, deletePost };
}
