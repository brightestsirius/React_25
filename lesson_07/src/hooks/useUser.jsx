import React, { useReducer, useEffect } from "react";

import { INITIAL_STATE, reducer } from "../store/user/reducer";

import service from "../services/users";

import { setUserAction } from "../store/user/actions";

export default function useUsers(id) {
  const [user, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      const response = await service.get(id);
      dispatch(setUserAction(response));
    })();
  }, []);

  const deleteUser = async () => {
    await service.delete(id);
  }

  return { ...user, deleteUser };
}
