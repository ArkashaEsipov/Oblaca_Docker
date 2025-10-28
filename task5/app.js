var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from Node.js Docker Container! It`s task 5.');
});

module.exports = app;