var Task = require('../models/Task');
//gets all tasks from database
function getAllTasks(req, res, next) {
    Task.find({}).then((tasks) => {
        res.json({
            tasks: tasks
                .map(task => task.toJSON())
                .map(task => {
                    return {
                        ...task, date: task.date.toLocaleDateString(),
                        time: task.date.toLocaleTimeString()
                    }
                })
        });
    }).catch((err) => {
        next(err);
    });
}

function createTask(req, res, next) {
    req.body.date = new Date(req.body.date + " " + req.body.time); // save the date and time as a single date object
    var task = new Task(req.body);
    task.save().then(() => {
        res.json(task); // once the task is saved, send the task back to the client
    }).catch((err) => {
        next(err);
    });
}
//deletes task from database
function deleteTask(req, res, next) {
    var { id } = req.params;
    Task.findByIdAndDelete(id).then(function () {
        res.json({success: true});
    }).catch(function (err) {
        next(err);
    })
}
// updates task in database
function updateTask(req, res, next) {
    var { id } = req.params;
    if (req.body.date) // if the date is not empty, set the date to a date object
        req.body.date = new Date(req.body.date + " " + req.body.time); // save the date and time as a single date object
    Task.findByIdAndUpdate(id, req.body).then(function (task) {
        console.log(task)
        res.json(task) // once the task is saved send the updated task back to the client
    }).catch(function (err) {
        next(err);
    })
}
// gets a specific task from the database
function getTask(req, res, next) {
    var { id } = req.params;
    Task.findById(id).then((task) => {
        if (!task)
            throw new Error('Task not found');

        var { description, completed, date, id } = task;
        var formatedDate = date.toLocaleDateString().split('/').map(x => x.length === 4 || x.length === 2 ? x : "0" + x); // format the date to be in the format yyyy-mm-dd. This is the format that the date input accepts
        formatedDate = `${formatedDate[2]}-${formatedDate[0]}-${formatedDate[1]}`;
        var formatedTime = date.toLocaleTimeString().split(' ')[0].split(':').map(x => x.length === 2 ? x : "0" + x).join(':'); // format the time to be in the format hh:mm:ss. This is the format that the time input accepts
        res.json({ description, completed, date: formatedDate, id, time: formatedTime });
    }).catch((err) => {
        next(err);
    });
}


module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getTask,
}