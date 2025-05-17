const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Pug view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
	session({
		secret: 'hemmelig_nøgle',
		resave: false,
		saveUninitialized: true,
	})
);

// Routes
app.get('/', (req, res) => {
	if (!req.session.personer) req.session.personer = [];
	res.render('index', { personer: req.session.personer });
});

app.post('/tilfoej', (req, res) => {
	const { navn, adresse } = req.body;

	if (!req.session.personer) {
		req.session.personer = [];
	}

	req.session.personer.push({ navn, adresse });
	res.status(200).send('OK');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Serveren kører på http://localhost:${PORT}`);
});
