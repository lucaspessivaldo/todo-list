import React from 'react'
import { RiDeleteBack2Fill } from 'react-icons/ri'

export default function TodoItem({ todoId, todoIsDone, todoText }) {
  return (
    <div className='item-container'>
      <div className='item-text-checkbox'>
        <input type="checkbox" name="" id="" />
        <p className='item-todo-text'>Lorem ipsum dolor sit amet.</p>
      </div>
      <RiDeleteBack2Fill className='delete-item-button' />
    </div>
  )
}
