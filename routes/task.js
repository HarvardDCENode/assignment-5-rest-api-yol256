var express = require('express');
var router = express.Router();
var { getAllTasks, createTask, updateTask, deleteTask, getTask } = require('../controllers/task');
/* GET home page. */
router.get('/', getAllTasks);  // returns all the tasks
router.post('/', createTask); // creates a new task
router.get('/:id', getTask); // returns a specific task page
router.patch('/:id', updateTask) // updates  a task
router.delete('/:id', deleteTask) // deletes a task

module.exports = router;
