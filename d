[33mcommit 2538f6fce685e720d1f39b059ceb539de0522fde[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: ozebe <wesleysantos345@hotmail.com>
Date:   Fri Oct 8 09:20:36 2021 -0300

    Se aplicado, esse commit irá inserir o esqueleto base do express generator.

[1mdiff --git a/.gitignore b/.gitignore[m
[1mnew file mode 100644[m
[1mindex 0000000..3c3629e[m
[1m--- /dev/null[m
[1m+++ b/.gitignore[m
[36m@@ -0,0 +1 @@[m
[32m+[m[32mnode_modules[m
[1mdiff --git a/API/app.js b/API/app.js[m
[1mnew file mode 100644[m
[1mindex 0000000..62dff0d[m
[1m--- /dev/null[m
[1m+++ b/API/app.js[m
[36m@@ -0,0 +1,41 @@[m
[32m+[m[32mvar createError = require('http-errors');[m
[32m+[m[32mvar express = require('express');[m
[32m+[m[32mvar path = require('path');[m
[32m+[m[32mvar cookieParser = require('cookie-parser');[m
[32m+[m[32mvar logger = require('morgan');[m
[32m+[m
[32m+[m[32mvar indexRouter = require('./routes/index');[m
[32m+[m[32mvar usersRouter = require('./routes/users');[m
[32m+[m
[32m+[m[32mvar app = express();[m
[32m+[m
[32m+[m[32m// view engine setup[m
[32m+[m[32mapp.set('views', path.join(__dirname, 'views'));[m
[32m+[m[32mapp.set('view engine', 'ejs');[m
[32m+[m
[32m+[m[32mapp.use(logger('dev'));[m
[32m+[m[32mapp.use(express.json());[m
[32m+[m[32mapp.use(express.urlencoded({ extended: false }));[m
[32m+[m[32mapp.use(cookieParser());[m
[32m+[m[32mapp.use(express.static(path.join(__dirname, 'public')));[m
[32m+[m
[32m+[m[32mapp.use('/', indexRouter);[m
[32m+[m[32mapp.use('/users', usersRouter);[m
[32m+[m
[32m+[m[32m// catch 404 and forward to error handler[m
[32m+[m[32mapp.use(function(req, res, next) {[m
[32m+[m[32m  next(createError(404));[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32m// error handler[m
[32m+[m[32mapp.use(function(err, req, res, next) {[m
[32m+[m[32m  // set locals, only providing error in development[m
[32m+[m[32m  res.locals.message = err.message;[m
[32m+[m[32m  res.locals.error = req.app.get('env') === 'development' ? err : {};[m
[32m+[m
[32m+[m[32m  // render the error page[m
[32m+[m[32m  res.status(err.status || 500);[m
[32m+[m[32m  res.render('error');[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32mmodule.exports = app;[m
[1mdiff --git a/API/bin/www b/API/bin/www[m
[1mnew file mode 100644[m
[1mindex 0000000..81cb39b[m
[1m--- /dev/null[m
[1m+++ b/API/bin/www[m
[36m@@ -0,0 +1,90 @@[m
[32m+[m[32m#!/usr/bin/env node[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * Module dependencies.[m
[32m+[m[32m */[m
[32m+[m
[32m+[m[32mvar app = require('../app');[m
[32m+[m[32mvar debug = require('debug')('api:server');[m
[32m+[m[32mvar http = require('http');[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * Get port from environment and store in Express.[m
[32m+[m[32m */[m
[32m+[m
[32m+[m[32mvar port = normalizePort(process.env.PORT || '3000');[m
[32m+[m[32mapp.set('port', port);[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * Create HTTP server.[m
[32m+[m[32m */[m
[32m+[m
[32m+[m[32mvar server = http.createServer(app);[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * Listen on provided port, on all network interfaces.[m
[32m+[m[32m */[m
[32m+[m
[32m+[m[32mserver.listen(port);[m
[32m+[m[32mserver.on('error', onError);[m
[32m+[m[32mserver.on('listening', onListening);[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * Normalize a port into a number, string, or false.[m
[32m+[m[32m */[m
[32m+[m
[32m+[m[32mfunction normalizePort(val) {[m
[32m+[m[32m  var port = parseInt(val, 10);[m
[32m+[m
[32m+[m[32m  if (isNaN(port)) {[m
[32m+[m[32m    // named pipe[m
[32m+[m[32m    return val;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  if (port >= 0) {[m
[32m+[m[32m    // port number[m
[32m+[m[32m    return port;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  return false;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * Event listener for HTTP server "error" event.[m
[32m+[m[32m */[m
[32m+[m
[32m+[m[32mfunction onError(error) {[m
[32m+[m[32m  if (error.syscall !== 'listen') {[m
[32m+[m[32m    throw error;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  var bind = typeof port === 'string'[m
[32m+[m[32m    ? 'Pipe ' + port[m
[32m+[m[32m    : 'Port ' + port;[m
[32m+[m
[32m+[m[32m  // handle specific listen errors with friendly messages[m
[32m+[m[32m  switch (error.code) {[m
[32m+[m[32m    case 'EACCES':[m
[32m+[m[32m      console.error(bind + ' requires elevated privileges');[m
[32m+[m[32m      process.exit(1);[m
[32m+[m[32m      break;[m
[32m+[m[32m    case 'EADDRINUSE':[m
[32m+[m[32m      console.error(bind + ' is already in use');[m
[32m+[m[32m      process.exit(1);[m
[32m+[m[32m      break;[m
[32m+[m[32m    default:[m
[32m+[m[32m      throw error;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * Event listener for HTTP server "listening" event.[m
[32m+[m[32m */[m
[32m+[m
[32m+[m[32mfunction onListening() {[m
[32m+[m[32m  var addr = server.address();[m
[32m+[m[32m  var bind = typeof addr === 'string'[m
[32m+[m[32m    ? 'pipe ' + addr[m
[32m+[m[32m    : 'port ' + addr.port;[m
[32m+[m[32m  debug('Listening on ' + bind);[m
[32m+[m[32m}[m
[1mdiff --git a/API/package.json b/API/package.json[m
[1mnew file mode 100644[m
[1mindex 0000000..3bcc833[m
[1m--- /dev/null[m
[1m+++ b/API/package.json[m
[36m@@ -0,0 +1,16 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "name": "api",[m
[32m+[m[32m  "version": "0.0.0",[m
[32m+[m[32m  "private": true,[m
[32m+[m[32m  "scripts": {[m
[32m+[m[32m    "start": "node ./bin/www"[m
[32m+[m[32m  },[m
[32m+[m[32m  "dependencies": {[m
[32m+[m[32m    "cookie-parser": "~1.4.4",[m
[32m+[m[32m    "debug": "~2.6.9",[m
[32m+[m[32m    "ejs": "~2.6.1",[m
[32m+[m[32m    "express": "~4.16.1",[m
[32m+[m[32m    "http-errors": "~1.6.3",[m
[32m+[m[32m    "morgan": "~1.9.1"[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[1mdiff --git a/API/public/stylesheets/style.css b/API/public/stylesheets/style.css[m
[1mnew file mode 100644[m
[1mindex 0000000..9453385[m
[1m--- /dev/null[m
[1m+++ b/API/public/stylesheets/style.css[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32mbody {[m
[32m+[m[32m  padding: 50px;[m
[32m+[m[32m  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32ma {[m
[32m+[m[32m  color: #00B7FF;[m
[32m+[m[32m}[m
[1mdiff --git a/API/routes/index.js b/API/routes/index.js[m
[1mnew file mode 100644[m
[1mindex 0000000..ecca96a[m
[1m--- /dev/null[m
[1m+++ b/API/routes/index.js[m
[36m@@ -0,0 +1,9 @@[m
[32m+[m[32mvar express = require('express');[m
[32m+[m[32mvar router = express.Router();[m
[32m+[m
[32m+[m[32m/* GET home page. */[m
[32m+[m[32mrouter.get('/', function(req, res, next) {[m
[32m+[m[32m  res.render('index', { title: 'Express' });[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32mmodule.exports = router;[m
[1mdiff --git a/API/routes/users.js b/API/routes/users.js[m
[1mnew file mode 100644[m
[1mindex 0000000..623e430[m
[1m--- /dev/null[m
[1m+++ b/API/routes/users.js[m
[36m@@ -0,0 +1,9 @@[m
[32m+[m[32mvar express = require('express');[m
[32m+[m[32mvar router = express.Router();[m
[32m+[m
[32m+[m[32m/* GET users listing. */[m
[32m+[m[32mrouter.get('/', function(req, res, next) {[m
[32m+[m[32m  res.send('respond with a resource');[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32mmodule.exports = router;[m
[1mdiff --git a/API/views/error.ejs b/API/views/error.ejs[m
[1mnew file mode 100644[m
[1mindex 0000000..7cf94ed[m
[1m--- /dev/null[m
[1m+++ b/API/views/error.ejs[m
[36m@@ -0,0 +1,3 @@[m
[32m+[m[32m<h1><%= message %></h1>[m
[32m+[m[32m<h2><%= error.status %></h2>[m
[32m+[m[32m<pre><%= error.stack %></pre>[m
[1mdiff --git a/API/views/index.ejs b/API/views/index.ejs[m
[1mnew