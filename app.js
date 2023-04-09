var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var taskRouter = require('./routes/task');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

// task routes
app.use('/tasks', taskRouter);

// html routes

app.get('/', async (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/create', async (req,res) => {
  res.sendFile(path.join(__dirname, 'views', 'create.html'));
});

app.get('/update/:id', async (req,res) => {
  res.sendFile(path.join(__dirname, 'views', 'update.html'));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err.message)
  // render the error page
  res.status(err.status || 500);
  res.json( { error: err.message});
});

module.exports = app;
