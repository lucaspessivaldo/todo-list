import React from 'react'
import { RiDeleteBack2Fill } from 'react-icons/ri'


export default function TodoItem({ removeTodo, checkTodo, todoId, todoIsDone, todoText }) {

  return (
    <div className='item-container'>
      <div className='item-text-checkbox'>
        <input
          type="checkbox"
          defaultChecked={todoIsDone}
          onChange={() => checkTodo.mutate({ todoId, checked: !todoIsDone })}
        />
        <p
          className={`item-todo-text ${todoIsDone ? 'textline' : ''}`}
        >{todoText}</p>
      </div>
      <RiDeleteBack2Fill
        className='delete-item-button'
        onClick={() => removeTodo.mutate(todoId)}
      />
    </div>
  )
}
