import React, {useState} from 'react'
import './style.sass'

import TodosForm from './TodosForm/TodosForm'
import TodoList from './TodosList/TodoList'

export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({});
  
  return (
    <div>
        <TodosForm liftingTodo={setCreatedTodo} />
        <TodoList createdTodo={createdTodo} />
    </div>
  )
}