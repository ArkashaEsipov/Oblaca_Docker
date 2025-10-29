var express = require('express');
var app = express();
const port =3001;
app.get('/', function (req, res) {
  res.send('Hello World from Node.js Docker Container! It`s task 5.');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
