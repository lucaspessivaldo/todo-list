import React from 'react'
import { RiDeleteBack2Fill } from 'react-icons/ri'


export default function TodoItem({ removeTodo, todoId, todoIsDone, todoText }) {

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
