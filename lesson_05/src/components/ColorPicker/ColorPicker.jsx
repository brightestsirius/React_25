import React, {memo} from "react";

export default memo(function ColorPicker({ color, setColor }) {
  const handleColor = (e) => setColor(e.target.value);
  return <input type="color" defaultValue={color} onChange={handleColor} />;
});