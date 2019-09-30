// Load express
const express = require('express');

// Create an app
const app = express();

const todosDb = require('./data/todos-db');

// Config
app.set('view engine', 'ejs');

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  // res.send('<h1>Hello Nodemon!</h1>');
  // res.render()
  // res.redirect()
  // res.json()

  res.redirect('/home');
});

app.get('/home', function (req, res) {
  // res.send('<h1>Home Page</h1>');
  res.render('home');
});

app.get('/todos', function (req, res) {
  res.render('todos/index', {
    todos: todosDb.getAll()
  });
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});
