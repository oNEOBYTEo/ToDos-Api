const { ToDo } = require('../models/todo.model');
const { filter } = require('../util/filter');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await ToDo.findAll({ where: { status: 'active' } });

    res.status(200).json({
      status: 'success',
      data: {
        todos
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      res.status(400).json({
        status: 'error',
        message: 'Must provide a valid title'
      });
      return;
    }

    const newTodo = await ToDo.create({ title });

    res.status(201).json({
      status: 'success',
      data: { newTodo }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = filter(req.body, 'title', 'status');

    const updateTodo = await ToDo.findOne({
      where: { id }
    });

    if (!updateTodo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant update ToDo, invalid ID'
      });
      return;
    }

    await updateTodo.update({ ...data });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await ToDo.findOne({ where: { id, status: 'active' } });

    if (!todo) {
      res.status(404).json({
        status: 'error',
        message: 'Cant delete ToDo, invalid ID'
      });
      return;
    }

    await todo.update({ status: 'deleted' });

    res.status(204).json({ status: 'success' });
  } catch (error) {
    console.log(error);
  }
};
