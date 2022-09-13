const mongoose = require('mongoose')

const Todo = mongoose.model('Todo', {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  text: String,
  checked: Boolean
})

module.exports = Todo