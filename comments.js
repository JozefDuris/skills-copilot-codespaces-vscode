//Create web server
var express = require('express');
var app = express();

app.use(express.static('public'));

//Create route
app.get('/comments', function (req, res) {
  res.send('Hello, World!');
});

//Start server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});