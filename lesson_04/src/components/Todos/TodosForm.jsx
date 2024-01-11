import React, { useState } from "react";
import service from "./../../services/todos";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

export default function TodosForm({ setAddedTodo }) {
  const [newTodo, setNewTodo] = useState({
    title: ``,
    completed: false,
  });

  const setTitle = (e) =>
    setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));

  const setCompleted = (e) =>
    setNewTodo((prevState) => ({ ...prevState, completed: e.target.checked }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await service.post(newTodo);
    setAddedTodo(response);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 0.5, width: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-required"
        label="Title"
        defaultValue={newTodo.title}
        onChange={setTitle}
      />
      <FormControlLabel
        control={
          <Checkbox checked={newTodo.completed} onChange={setCompleted} />
        }
        label="Completed"
      />
      <Button type="submit" variant="contained">
        Add todo
      </Button>
    </Box>
  );
}
