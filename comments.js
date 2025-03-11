//create web server
const express = require('express');
const app = express();
//parse incoming request
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//create a new comment
app.post('/comments', (req, res) => {
  const { body } = req;
  console.log(body);
  res.json({
    message: 'New comment created'
  });
});
//start the server
app.listen(4001, () => {
  console.log('Server is running');
});
