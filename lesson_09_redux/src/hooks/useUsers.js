import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setUsersFromPosts, setSelectedUser } from "./../store/users/slice";

import { SELECTED_ALL } from "./../constants/users";

export default function useUsers() {
  const { users } = useSelector((state) => state.users);
  const { posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsersFromPosts(posts));
  }, [posts]);

  const setUser = (payload) => dispatch(setSelectedUser(payload));

  const setDefaultSelectedUser = () => dispatch(setSelectedUser(SELECTED_ALL));

  return { users, setUser, setDefaultSelectedUser };
}
