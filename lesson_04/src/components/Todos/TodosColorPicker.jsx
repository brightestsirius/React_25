import React, {memo} from "react";
import { MuiColorInput } from "mui-color-input";

export default memo(function TodosColorPicker({ setColor, color }) {
  const handleColor = (value) => setColor(value);
  return <MuiColorInput value={color} onChange={handleColor} />;
})