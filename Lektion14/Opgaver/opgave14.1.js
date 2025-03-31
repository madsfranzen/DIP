// opgave14.1.js
import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + '/filer')); //ellers virker links ikke

function genererLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>\n';
    }
    return html;
}

async function GetHtml() {
    let filnavne = await fs.readdir(__dirname + '/filer');
    let html = genererLinks(filnavne);
    return html;
}

async function GetUnderFiler(filnavn) {
    try {
        let filnavne = await fs.readdir(path.join(__dirname, 'filer', filnavn));
        let html = genererLinks(filnavne);
        return html;
    } catch (error) {
        console.error('Error reading directory:', error);
        return '<p>404</p>';
    }
}

app.get('/:folder?', async (request, response) => {
    const folder = request.params.folder || ''; // Default to root if no folder is specified
    let html;

    if (folder) {
        html = await GetUnderFiler(folder);
    } else {
        html = await GetHtml();
    }

    response.status(200).send(html);
});

app.listen(8000);

console.log('Server listening on port 8000');