import React, {useState} from 'react'
import './style.sass'

import TodosForm from './TodosForm/TodosForm'
import TodoList from './TodosList/TodoList'
import ColorPicker from './../ColorPicker/ColorPicker'

export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({});
  const [color, setColor] = useState(`#000`);
  
  return (
    <div>
        <TodosForm liftingTodo={setCreatedTodo} />
        <ColorPicker color={color} setColor={setColor} />
        <TodoList createdTodo={createdTodo} color={color} />
    </div>
  )
}