const express = require('express')
const router = express.Router()
const jwtAuth = require('../middleware/jwtAuth')

const { getTodos, createTodo, deleteTodo, updateTodo } = require('../controllers/dashboardController')

router.get('/', jwtAuth, getTodos)
router.post('/', jwtAuth, createTodo)
router.delete('/', jwtAuth, deleteTodo)
router.patch('/', jwtAuth, updateTodo)

module.exports = router