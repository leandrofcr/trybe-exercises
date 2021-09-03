const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

app.listen(3001, () => {
  console.log('App listening port 3001');
});

app.get('/hello', (_req, res) => {
  res.send('Hello World');
});

const langs = ['HTML', 'CSS', 'JS', 'React'];

app.get('/langs', (_req, res) => {
  res.send(langs);
});

app.post('/langs', (req, res) => {
  const { name } = req.body;
  langs.push(name);
  res.send(`Linguagem ${name} adicionada com suscesso!`)
});
