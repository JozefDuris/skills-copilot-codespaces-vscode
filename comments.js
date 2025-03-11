//create web server
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const comments = [];

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

router.post('/comments', (req, res) => {
  comments.push(req.body.comment);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.redirect('/comments');
});

router.get('/comments', (req, res) => {
  const comments = JSON.parse(fs.readFileSync('comments.json'));
  res.send(comments.map((comment, index) => `<p>${index + 1}: ${comment}</p>`).join(''));
});

app.use('/', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
