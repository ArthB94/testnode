const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('Assignment2'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000');
})
