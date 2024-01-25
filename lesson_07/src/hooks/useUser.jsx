import React, { useReducer } from "react";

import {
  INITIAL_STATE as userState,
  reducer as userReducer,
} from "./../store/user/reducer";

import service from "./../services/users";
import { setUserAction } from "./../store/user/actions";

export default function useUser() {
  const [user, dispatchUser] = useReducer(userReducer, userState);

  const getUser = async (id) => {
    const response = await service.get(id);
    dispatchUser(setUserAction(response));
  };

  return { ...user, dispatchUser, getUser };
}
