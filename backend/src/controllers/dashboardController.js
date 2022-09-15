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
const deleteTodo = async (req, res) => {
  const {todoId} = req.body
  const userToken = req.token.id

  if(!todoId) {
    return res.status(400).json({
      "success": false,
      "data": {},
      "message": "todoId is required"
    })
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
}

//@PATCH Edite a todo
const updateTodo = (req, res) => {

  res.status(200).json({
    "success": true,
    "data": {},
    "message": "todo was updated"
  })
}


module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo
}


// user: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'User'
// },
// text: String,
// checked: Boolean

// {
//   "success": false,
//   "data": {},
//   "message": "User email already exists"
// }