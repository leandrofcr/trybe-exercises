const express = require('express');
const Author = require('./models/Author');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not Found' });

  return res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (!Author.isValid(firstName, middleName, lastName)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(firstName, middleName, lastName);

  return res.status(201).json({ message: 'Autor criado com sucesso!' });
});

app.listen(port, () => console.log('Online on port 3000!'));
