import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { MdAddCircle } from 'react-icons/md'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getTodos, addTodo, updateTodo, deleteTodo } from '../../api/todosApi'

import './dashboard.css'

export default function Dashboard() {
  const queryClient = useQueryClient()
  const { user } = useSelector((state) => state.auth)
  const [newTodo, setNewTodo] = useState('')
  const navigate = useNavigate()

  const { data, isLoading, isError, isSuccess } = useQuery(['todos'], getTodos)

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user, navigate])

  const createNewTodo = useMutation(addTodo, {
    onSuccess: () => {
      return queryClient.invalidateQueries(['todos'])
    },
  })

  const removeTodo = useMutation(deleteTodo, {
    onSuccess: () => {
      return queryClient.invalidateQueries()
    },
  })

  const checkTodo = useMutation(updateTodo, {
    onSuccess: () => {
      return queryClient.invalidateQueries()
    }
  })

  return (
    <main className='dashboard-main'>
      <div className='dashboard-container'>

        <div className='dashbaord-header-container'>
          <p className='dashboard-text-header'>Todo List</p>
        </div>
        <div className='create-todo-container'>
          <input
            type="text"
            className='input-create-todo'
            placeholder='Add Todo...'
            onChange={(event) => setNewTodo(event.target.value)}
          />
          <MdAddCircle
            className='dashbaord-plus-icon'
            onClick={() => createNewTodo.mutate(newTodo)}
          />
        </div>
        {isLoading && <h1>Is loading...</h1>}
        {isSuccess && data.data.todos.map(todo => {
          return (
            <TodoItem
              key={todo._id}
              todoId={todo._id}
              todoIsDone={todo.checked}
              todoText={todo.text}
              removeTodo={removeTodo}
              checkTodo={checkTodo}
            />
          )
        })}
      </div>
    </main>
  )
}
