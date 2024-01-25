import React, { useContext } from "react";

import InputColorContext from "../../../context/InputColorContext";

export default function Input() {
  const { color, text, changeText } = useContext(InputColorContext);

  const handleText = (e) => changeText(e.target.value);

  return (
    <input
      type="text"
      defaultValue={text}
      style={{ color }}
      onChange={handleText}
    />
  );
}
