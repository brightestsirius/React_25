import React, { useReducer } from "react";

import Form from "./Form/Form";
import ColorPicker from "./ColorPicker/ColorPicker";

import FormContext from "./../../context/form";

import {
  INITIAL_STATE as formState,
  reducer as formReducer,
} from "./../../store/form/reducer";

import {
  INITIAL_STATE as colorState,
  reducer as colorReducer,
} from "./../../store/color/reducer";

export default function FormColorPicker() {
  const [form, dispatchForm] = useReducer(formReducer, formState);
  const [color, dispatchColor] = useReducer(colorReducer, colorState);

  return (
    <FormContext.Provider
      value={{ ...form, dispatchForm, ...color, dispatchColor }}
    >
      <ColorPicker />
      <br />
      <br />
      <Form />
    </FormContext.Provider>
  );
}
