import React, {useState} from 'react'
import './style.sass'

import TodosForm from './TodosForm/TodosForm'
import TodoList from './TodosList/TodoList'
import Filter from './../Filter/Filter'

import {TODOS_FILTER_ALL} from '../../constants/todos'

export default function Todos() {
  const [createdTodo, setCreatedTodo] = useState({});
  const [todosFilter, setTodosFilter] = useState(TODOS_FILTER_ALL);
  
  return (
    <div>
        <TodosForm liftingTodo={setCreatedTodo} />
        <Filter todosFilter={todosFilter} setTodosFilter={setTodosFilter} />
        <TodoList createdTodo={createdTodo} todosFilter={todosFilter} />
    </div>
  )
}