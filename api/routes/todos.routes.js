const express = require('express');

const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todos.controller');

const router = express.Router();

router.get('/', getAllTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = { todosRouter: router };
