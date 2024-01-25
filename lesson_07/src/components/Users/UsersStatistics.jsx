import React, { useContext } from "react";

import AppContext from "../../context/app";

export default function UsersStatistics() {
  const { users } = useContext(AppContext);
  return <div>Users Statistics: {users.length}</div>;
}
