var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var taskRouter = require('./routes/task');
const cors = require('cors');

var app = express();

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'views')));

// task routes
app.use('/tasks', taskRouter);

app.get('**', (req, res) => {
  console.log(req.url);
  if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
      console.log('allowext');
      let url = req.url.split('?')[0];
      res.sendFile(path.resolve(path.join(__dirname, 'dist', url)));
  } else {
      console.log('else');
      res.sendFile(path.resolve(path.join(__dirname, 'dist', 'index.html')));
  }
});

// html routes

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/create', async (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'create.html'));
});

app.get('/update/:id', async (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'update.html'));
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err.message)
  // render the error page
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
