import React from "react";

import TodoListItem from "./TodoListItem";

import useTodos from "../../../hooks/useTodos";

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function TodoList({ createdTodo, todosFilter, todosColor }) {
  const [filteredList, handleItemDelete, handleItemComplete, isLoading] =
    useTodos(createdTodo, todosFilter);

  return filteredList.length ? (
    isLoading ? (
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </Stack>
    ) : (
      <ul style={{ color: todosColor }}>
        {filteredList.map((item, index) => (
          <TodoListItem
            key={index}
            item={item}
            handleItemDelete={() => handleItemDelete(item.id)}
            handleItemComplete={handleItemComplete}
          />
        ))}
      </ul>
    )
  ) : null;
}
