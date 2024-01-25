import React, { useReducer, useEffect } from "react";

import service from "./../services/users";

import {
  INITIAL_STATE as usersState,
  reducer as usersReducer,
} from "./../store/users/reducer";

import { setUsersAction, deleteItemAction } from "./../store/users/actions";

export default function useUsers() {
  const [users, dispatchUsers] = useReducer(usersReducer, usersState);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      dispatchUsers(setUsersAction(response));
    })();
  }, []);

  const deleteUser = async (id) => {
    await service.delete(id);
    dispatchUsers(deleteItemAction(id));
  };

  return { ...users, dispatchUsers, deleteUser };
}
