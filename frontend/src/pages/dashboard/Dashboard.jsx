import React from 'react'
import TodoItem from './TodoItem'
import { MdAddCircle } from 'react-icons/md'
import './dashboard.css'

export default function Dashboard() {
  return (
    <main className='dashboard-main'>
      <div className='dashboard-container'>

        <div className='dashbaord-header-container'>
          <p className='dashboard-text-header'>Todo List</p>
          <MdAddCircle className='dashbaord-plus-icon' />
        </div>

        {Array(4).fill('').map(e => <TodoItem />)}
      </div>
    </main>
  )
}
