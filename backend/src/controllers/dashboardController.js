const asyncHandler = require('express-async-handler')
const {isObjectIdOrHexString} = require('mongoose')
const Todo = require('../models/todoModel')

//@GET Get all todos
const getTodos = async (req, res) => {
  const userToken = req.token.id
  const allTodos = await Todo.find({user: userToken})
  
  res.status(200).json({
    "success": true,
    "data": {
      "todos": allTodos
    },
    "message": null
  })
}

//@POST Create Todo
const createTodo = async (req, res) => {
  const {text} = req.body
  const userToken = req.token.id

  if(!text) {
    return res.status(400).json({
      "success": false,
      "data": {},
      "message": "Text is required"
    })
  }
  
  const newTodo = await Todo.create({
    user: userToken,
    text: text,
    checked: false
  })

  res.status(200).json({
    "success": true,
    "data": {
      "newTodo": newTodo
    },
    "message": null
  })

}

//@DELETE delete a todo
const deleteTodo = asyncHandler( async (req, res) => {
  const {todoId} = req.body
  const userToken = req.token.id

  if(!todoId) {
    res.status(400)
    throw new Error('todoId is required')
  }

  if(!isObjectIdOrHexString(todoId)){
    res.status(400)
    throw new Error('todoId is not a Object.id valid')
  }

  const todo = await Todo.findById(todoId)

  if(!todo || todo.user.toString() !== userToken) {
    return res.status(400).json({
      "success": false,
      "data": {},
      "message": "TodoId not found"
    })
  }

  todo.remove()

  res.status(200).json({
    "success": true,
    "data": {
      todoId: todo._id
    },
    "message": "todo deleted"
  })

})

//@PATCH Update a todo
const updateTodo = asyncHandler(async (req, res) => {
  const {text, checked, todoId} = req.body
  const userToken = req.token.id

  if(!todoId) {
    res.status(400)
    throw new Error('todoId are required')
  }

  if(!isObjectIdOrHexString(todoId)){
    res.status(400)
    throw new Error('todoId is not a Object.id valid')
  }

  if(!text && !checked) {
    res.status(400)
    throw new Error('text or checked are required')
  }

  const todo = await Todo.findById(todoId)
  
  if(!todo || todo.user.toString() !== userToken) {
    res.status(400)
    throw new Error('todoId not found')
  }

  if(typeof checked === 'boolean'){
    todo.checked = checked
  }

  if (text) {
    todo.text = text
  }

  await todo.save()

  res.status(200).json({
    "success": true,
    "data": {},
    "message": "todo was updated"
  })
})

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo
}
