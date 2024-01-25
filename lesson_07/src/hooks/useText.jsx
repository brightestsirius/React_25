import React, { useReducer } from "react";

import { INITIAL_STATE, reducer } from "../store/input/reducer";

import { setTextAction } from "../store/input/actions";

export default function useText() {
  const [text, dispatchText] = useReducer(reducer, INITIAL_STATE);

  const changeText = (value) => dispatchText(setTextAction(value));

  return { ...text, changeText };
}
