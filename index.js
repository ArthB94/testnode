const express = require('express');
const app = express();
const port =10010

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/Assignment2/index.html');
})


app.listen(port, function () {
  console.log('Example app listening on port  '+port);
})
