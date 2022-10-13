import React, { useEffect } from 'react'
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
  const navigate = useNavigate()

  const { data, isLoading, isError, isSuccess } = useQuery(['todos'], getTodos)
  console.log(data) //getting data

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <main className='dashboard-main'>
      <div className='dashboard-container'>

        <div className='dashbaord-header-container'>
          <p className='dashboard-text-header'>Todo List</p>
          <MdAddCircle className='dashbaord-plus-icon' />
        </div>
        {isLoading && <h1>Is loadingsdf......</h1>}
        {isSuccess && data.data.todos.map(todo => <TodoItem todoId={todo._id} todoIsDone={todo.checked} todoText={todo.text} />)}
      </div>
    </main>
  )
}
