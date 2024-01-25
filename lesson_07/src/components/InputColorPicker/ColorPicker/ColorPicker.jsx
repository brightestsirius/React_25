import React, { useContext } from "react";

import InputColorContext from "../../../context/InputColorContext";

export default function ColorPicker() {
  const { color, text, changeColor } = useContext(InputColorContext);

  const handleColor = (e) => changeColor(e.target.value);

  return (
    <div>
      {text}: <input type="color" defaultValue={color} onChange={handleColor} />
    </div>
  );
}
