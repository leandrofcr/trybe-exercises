const express = require('express');

const app = express();

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.listen(3001, ()=> {
  console.log('App listening port 3001');
});