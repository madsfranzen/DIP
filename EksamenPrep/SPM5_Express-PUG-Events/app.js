const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

let contacts = [
  { id: 1, name: 'Anna', phone: '12345678' },
  { id: 2, name: 'Peter', phone: '87654321' },
];

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (_req, res) => {
  res.render('index', { contacts });
});

// Opdater telefonnummer
app.post('/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const newPhone = req.body.newPhone;

  const contact = contacts.find(c => c.id === id);
  if (contact && newPhone) {
    contact.phone = newPhone;
  }

  res.redirect('/');
});

module.exports = app;

