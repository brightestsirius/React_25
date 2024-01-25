import React from "react";
import {Link} from 'react-router-dom'

import useUsers from "./../../hooks/useUsers";

export default function UsersList() {
  const { users } = useUsers();

  return users.length ? (
    <ul>
      {users.map((item) => (
        <li key={item.id}><Link to={`${item.id}?color=green&fontSize=12`}>{item.name}</Link></li>
      ))}
    </ul>
  ) : null;
}
