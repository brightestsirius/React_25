import React from "react";

export default function TodosColorPicker({ setColor, color }) {
  const handleColor = (e) => setColor(e.target.value);
  return <input type="color" defaultValue={color} onChange={handleColor} />;
}
