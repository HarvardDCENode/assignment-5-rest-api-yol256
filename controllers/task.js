var Task = require('../models/Task');

function getAllTasks(req, res, next) {
    Task.find({}).then((tasks) => {
      var exists = tasks.length > 0; // variable to check if there are any tasks, used to display a message if there are no tasks
      res.render('index', {tasks: tasks.map(task => task.toJSON()).map(task => {return {...task, date: task.date.toLocaleDateString(), time: task.date.toLocaleTimeString()}}), exists, title: 'Task List' });
    }).catch((err) => {
      next(err);
    });
}

function createTask(req, res, next) {
    req.body.date = new Date(req.body.date + " " + req.body.time); // save the date and time as a single date object
    var task = new Task(req.body);
    task.save().then(() => {
      res.redirect('/'); // once the task is saved, redirect to the home page
    }).catch((err) => {
      next(err);
    });
}

function updateOrDeleteTask(req,res,next) {
    var {id} = req.params;
    var {_method} = req.query; // get the method from the query string
    if (_method === 'DELETE') { // if the method is delete, delete the task
      Task.findByIdAndDelete(id).then(function (){
        res.redirect('/');
      }).catch(function (err){
        next(err);
      })
    } else if (_method === 'PATCH') { // if the method is patch, update the task
      console.log("Hello", req.body)
      if(req.body.completed && req.body.completed.trim() === 'on') { // if the checkbox is checked, the value is 'on', so set the value to true
        req.body.completed = true;
      }else if(req.body.completed && req.body.completed.trim() === 'off') { // if the checkbox is not checked, the value is 'off', so set the value to false
        req.body.completed = false;
      }
      if(req.body.date) // if the date is not empty, set the date to a date object
        req.body.date = new Date(req.body.date + " " + req.body.time); // save the date and time as a single date object
      Task.findByIdAndUpdate(id, req.body).then(function (){
        res.redirect('/'); // once the task is saved, redirect to the home page
      }).catch(function (err){
        next(err);
      })
    }
}

function getTask(req, res, next) {
    var {id} = req.params;
    Task.findById(id).then((task) => {
      var {description, completed, date, id} = task;
      var formatedDate = date.toLocaleDateString().split('/').map(x => x.length === 4 || x.length === 2 ? x : "0"+x); // format the date to be in the format yyyy-mm-dd. This is the format that the date input accepts
      formatedDate = `${formatedDate[2]}-${formatedDate[0]}-${formatedDate[1]}`;
      var formatedTime = date.toLocaleTimeString().split(' ')[0].split(':').map(x => x.length === 2 ? x : "0"+x).join(':'); // format the time to be in the format hh:mm:ss. This is the format that the time input accepts
      res.render('edit', { title: 'Edit Task', description, completed, date: formatedDate, id, time: formatedTime});
    }).catch((err) => {
      next(err);
    });
}

function createTaskPage(req, res, next) {
    res.render('create', { title: 'Create Task' });
}

module.exports = {
    getAllTasks,
    createTask,
    updateOrDeleteTask,
    getTask,
    createTaskPage
}