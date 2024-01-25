import React, { useReducer } from "react";

import { INITIAL_STATE, reducer } from "./../store/color/reducer";

import { setColorAction } from "./../store/color/actions";

export default function useColor() {
  const [color, dispatchColor] = useReducer(reducer, INITIAL_STATE);

  const changeColor = (value) => dispatchColor(setColorAction(value));

  return { ...color, changeColor };
}