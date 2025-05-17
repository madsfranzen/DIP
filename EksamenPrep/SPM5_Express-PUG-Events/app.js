const express = require('express');
const path = require('path');

const app = express();

// Pug view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const kontakter = [{navn : mads, telefonnummer:42339439}, {navn: bob, telefonnummer: 12345678}]

// Routes
app.get('/', (_req, res) => {
	res.render('index', { kontakter: kontakter });
});

app.post('/tilfoej', (req, res) => {
	const { navn, telefonnummer } = req.body;
	kontakter.push({ navn: navn, telefonnummer: telefonnummer});
	res.status(200).send('OK');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Serveren kører på http://localhost:${PORT}`);
});
