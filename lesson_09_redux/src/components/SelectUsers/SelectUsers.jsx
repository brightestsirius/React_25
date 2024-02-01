import React from "react";
import { useSelector } from "react-redux";

import { SELECTED_ALL } from "./../../constants/users";
import useUsers from "./../../hooks/useUsers";

export default function SelectUsers() {
  const { selectedUser } = useSelector((state) => state.users);
  const { users, setUser } = useUsers();

  const handleSelect = (e) => setUser(e.target.value);

  return users.length ? (
    <select defaultValue={selectedUser} onChange={handleSelect}>
      <option value={SELECTED_ALL}>{SELECTED_ALL}</option>
      {users.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  ) : null;
}
