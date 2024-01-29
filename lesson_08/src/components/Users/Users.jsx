import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import thunks from "./../../store/users/thunks";

import useFilteredUsers from "./../../hooks/useFilteredUsers";

export default function Users() {
  const { users, isLoading } = useSelector((state) => state.users);
  const { filter } = useSelector((state) => state.filter);

  const { filteredUsers } = useFilteredUsers(users, filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.setUsers());
  }, []);

  const handleActivate = (item) => dispatch(thunks.changeUser(item));

  return filteredUsers.length ? (
    isLoading ? (
      <p>Loading...</p>
    ) : (
      <ul>
        {filteredUsers.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
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
