import React, { useReducer, useEffect } from "react";

import { INITIAL_STATE, reducer } from "./../store/users/reducer";

import service from "./../services/users";

import { setUsersAction } from "./../store/users/actions";

export default function useUsers() {
  const [users, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      const response = await service.get();
      dispatch(setUsersAction(response));
    })();
  }, []);

  return { ...users };
}
