import React, { useContext } from "react";

import FormContext from "./../../../context/form";

import { setTextAction } from "./../../../store/form/actions";

export default function Form() {
  const { color, form, dispatchForm } = useContext(FormContext);

  const handleChange = (e) => dispatchForm(setTextAction(e.target.value));

  return (
    <input
      type="text"
      defaultValue={form}
      onChange={handleChange}
      style={{ color }}
    />
  );
}
