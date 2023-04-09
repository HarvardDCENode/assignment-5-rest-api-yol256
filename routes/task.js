var express = require('express');
var router = express.Router();
var {getAllTasks, createTask, updateOrDeleteTask, getTask, createTaskPage} = require('../controllers/task');
/* GET home page. */
router.get('/',getAllTasks);  // renders all the tasks
router.post('/', createTask); // creates a new task
router.get('/create',createTaskPage); // renders the create task page
router.post('/tasks/:id', updateOrDeleteTask) // updates or deletes a task
router.get('/:id', getTask); // renders the edit task page

module.exports = router;
