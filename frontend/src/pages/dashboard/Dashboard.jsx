import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { MdAddCircle } from 'react-icons/md'

import { useQuery, useMutation, useQueryClient } from 'react-query'
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
      queryClient.invalidateQueries(['todos'])
    },
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
        {isLoading && <h1>Is loadingsdf......</h1>}
        {isSuccess && data.data.todos.map(todo => <TodoItem key={todo._id} todoId={todo._id} todoIsDone={todo.checked} todoText={todo.text} />)}
      </div>
    </main>
  )
}
