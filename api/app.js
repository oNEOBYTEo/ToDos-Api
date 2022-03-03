const express = require('express');
const cors = require('cors');

// const { ToDo } = require('./models/todo.model');

const { todosRouter } = require('./routes/todos.routes');

const { sequelize } = require('./util/database');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/todos', todosRouter);

sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log('Express app running!!');
});

// Define endpoint for ToDos
// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

// Establish a connection with a Database (Postgress)

// Create ToDo model
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)
// app.use(cors())
