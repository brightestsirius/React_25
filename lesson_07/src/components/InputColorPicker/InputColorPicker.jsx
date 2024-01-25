import React from "react";

import ColorPicker from "./ColorPicker/ColorPicker";
import Input from "./Input/Input";

import InputColorContext from "./../../context/InputColorContext";

import useColor from "../../hooks/useColor";
import useText from "../../hooks/useText";

export default function InputColorPicker() {
  const color = useColor();
  const text = useText();

  return (
    <InputColorContext.Provider value={{ ...color, ...text }}>
      <ColorPicker />
      <br />
      <br />
      <Input />
    </InputColorContext.Provider>
  );
}
