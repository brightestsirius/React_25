import React from "react";

import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoListItem({ item = {}, removeItem, completeItem }) {
  return (
    <ListItem key={item.id}>
      {item.title}
      <IconButton onClick={() => removeItem(item.id)} edge="end" aria-label="delete"><DeleteIcon /></IconButton>
      <input type="checkbox" defaultChecked={item.completed} onChange={() => completeItem(item)} />
    </ListItem>
  );
}
