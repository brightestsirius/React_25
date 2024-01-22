import React, {useContext} from 'react'

import { THEME_LIGHT, THEME_DARK } from '../../constants/theme'

import ThemeContext from '../../context/ThemeContext';

export default function ThemeSelect() {
  const {theme, setTheme} = useContext(ThemeContext);

  const handleSelect = e => setTheme(e.target.value);

  return <select defaultValue={theme} onChange={handleSelect}>
    <option value={THEME_LIGHT}>Light</option>
    <option value={THEME_DARK}>Dark</option>
  </select>
}