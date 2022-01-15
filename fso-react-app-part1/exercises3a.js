const express = require('express');
const app = express();

app.use(express.json());

const persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/info', (req, res) => {
  req.body = `
  <h1> Phonebook has the info for ${persons.length} people </h1>
  <br />
  ${new Date()}
  `;
  res.send(req.body);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((n) => n.id === id);
  person ? res.json(person) : res.status(404).end();
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const personsFiltered = persons.filter((n) => n.id !== id);
  res.json(personsFiltered);
});

app.post('/api/persons', (req, res) => {
  const newId = Math.floor(Math.random() * 200);
  // const newId = Math.max(persons.map(n => n.id));
  // newId = newId + 1;
  const body = req.body;

  if (!body.name || !body.number) {
    return res.status(404).json({
      error: 'error is missing',
    });
  }

  const newPerson = {
    id: newId,
    name: body.name,
    number: body.number,
  };

  req.body = [...persons, newPerson];
  res.json(req.body);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

