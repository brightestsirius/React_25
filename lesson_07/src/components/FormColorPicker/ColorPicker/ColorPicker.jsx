import React, { useContext } from "react";

import FormContext from "./../../../context/form";

import { setColorAction } from "./../../../store/color/actions";

export default function ColorPicker() {
  const { color, form, dispatchColor } = useContext(FormContext);

  const handleColor = (e) => dispatchColor(setColorAction(e.target.value));

  return (
    <label>
      {form}: <input type="color" defaultValue={color} onChange={handleColor} />
    </label>
  );
}
