import React from "react";

import {
  USERS_ALL_FILTER,
  USERS_ACTIVE_FILTER,
  USERS_NON_ACTIVE_FILTER,
} from "../../constants/users";

import { useSelector, useDispatch } from "react-redux";
import { setFilterAction } from "../../store/filter/actions";

export default function Filter() {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleSelect = (e) => dispatch(setFilterAction(e.target.value));

  return (
    <select defaultValue={filter} onChange={handleSelect}>
      <option value={USERS_ALL_FILTER}>{USERS_ALL_FILTER}</option>
      <option value={USERS_ACTIVE_FILTER}>{USERS_ACTIVE_FILTER}</option>
      <option value={USERS_NON_ACTIVE_FILTER}>{USERS_NON_ACTIVE_FILTER}</option>
    </select>
  );
}
