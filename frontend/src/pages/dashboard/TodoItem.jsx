import React from 'react'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { useMutation, useQueryClient } from 'react-query'
import { updateTodo, deleteTodo } from '../../api/todosApi'



export default function TodoItem({ todoId, todoIsDone, todoText }) {
  const queryClient = useQueryClient()

  const removeTodo = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  return (
    <div className='item-container'>
      <div className='item-text-checkbox'>
        <input type="checkbox" name="" id="" />
        <p className='item-todo-text'>{todoText}</p>
      </div>
      <RiDeleteBack2Fill
        className='delete-item-button'
        onClick={() => removeTodo.mutate(todoId)}
      />
    </div>
  )
}
