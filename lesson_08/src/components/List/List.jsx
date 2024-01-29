import React, { useEffect, useMemo } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  USER_ACTIVE_FILTER,
  USER_NON_ACTIVE_FILTER,
} from "./../../constants/users";

import thunks from "./../../store/users/thunks";

export default function List() {
  const { users, isLoading } = useSelector((state) => state.users);
  const { filter } = useSelector((state) => state.filter);

  const filteredList = useMemo(
    () =>
      users.filter((item) => {
        switch (filter) {
          case USER_ACTIVE_FILTER:
            return item.active;
          case USER_NON_ACTIVE_FILTER:
            return !item.active;
          default:
            return item;
        }
      }),
    [filter, users]
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.setUsers());
  }, []);

  const handleDelete = async (id) => dispatch(thunks.deleteUser(id));

  const handleActivate = async (item) => dispatch(thunks.changeUser(item));

  return filteredList.length ? (
    isLoading ? (
      <p>Loading...</p>
    ) : (
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <input
              type="checkbox"
              defaultChecked={item.active}
              onChange={() => handleActivate(item)}
            />
          </li>
        ))}
      </ul>
    )
  ) : null;
}
