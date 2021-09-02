const express = require('express');
const app =  express();
const port = 3000;
const Author = require('./models/Author');

app.get('/authors', async (_req, res) => {
  try {
    const authors = await Author.getAll();
  
    res.status(200).json(authors);
    
  } catch (error) {
    console.log(error.message)
  }
});

app.listen(port, () => console.log('Listening on port 3000!'));
