import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  USER_ALL_FILTER,
  USER_ACTIVE_FILTER,
  USER_NON_ACTIVE_FILTER,
} from "./../../constants/users";

import { setFilterAction } from "./../../store/filter/actions";

export default function Filter() {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleSelect = (e) => dispatch(setFilterAction(e.target.value));

  return (
    <select defaultValue={filter} onChange={handleSelect}>
      <option value={USER_ALL_FILTER}>{USER_ALL_FILTER}</option>
      <option value={USER_ACTIVE_FILTER}>{USER_ACTIVE_FILTER}</option>
      <option value={USER_NON_ACTIVE_FILTER}>{USER_NON_ACTIVE_FILTER}</option>
    </select>
  );
}