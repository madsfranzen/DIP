import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderFile } from 'pug';
import { join } from 'path';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.set('views', join(__dirname, '/'));
app.set('view engine', 'pug');

app.use(express.static('styles'));

async function getRandomUsers() {
    const response = await fetch('https://randomuser.me/api/?results=100');
    const data = await response.json();
    const users = [];
    for (const user of data.results) {
        if (user.nat === 'DK') {
            users.push(user);
        }
    }
    return users;
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/users', async (req, res) => {
    res.render('users', { users: await getRandomUsers() });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

