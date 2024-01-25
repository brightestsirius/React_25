import React, { useContext } from "react";

import { Link } from "react-router-dom";

import AppContext from "../../context/app";

export default function UsersList() {
  const { users, deleteUser } = useContext(AppContext);

  const handleItemDelete = (id) => deleteUser(id);

  return users.length ? (
    <ul>
      {users.map((item) => (
        <li key={item.id}>
          <Link to={`${item.id}/?color=crimson`}>{item.name} </Link>
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;
}
