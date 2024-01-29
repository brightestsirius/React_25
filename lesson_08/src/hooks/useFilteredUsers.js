import React, { useMemo } from "react";

import {
  USERS_ACTIVE_FILTER,
  USERS_NON_ACTIVE_FILTER,
} from "./../constants/users";

export default function useFilteredUsers(users, filter) {
  const filteredUsers = useMemo(
    () =>
      users.filter((item) => {
        switch (filter) {
          case USERS_ACTIVE_FILTER:
            return item.active;
          case USERS_NON_ACTIVE_FILTER:
            return !item.active;
          default:
            return item;
        }
      }),
    [filter, users]
  );

  return { filteredUsers };
}
