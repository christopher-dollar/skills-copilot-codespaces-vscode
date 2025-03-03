// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a fake database
const comments = [
  { id: 1, author: 'John', content: 'Hello!' },
  { id: 2, author: 'Jane', content: 'Hi!' },
  { id: 3, author: 'Joe', content: 'Hey!' }
];

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  res.json(comment);
});

// Listen to port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});