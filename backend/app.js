const express = require('express');
const app = express();


app.use('/api/posts', (req, res) => {
  const posts = [
    {
      id: Math.floor(Math.random()*10000).toString(),
      title: 'first post',
      content: 'this is coming from the server',
    },
      {
        id: Math.floor(Math.random()*10000).toString(),
        title: 'second post',
        content: 'this is also coming from the server',
      }
  ];

  res.status(200).json({
    message: 'posts fetched successfully!',
    posts: posts,
  });
});



module.exports = app;
