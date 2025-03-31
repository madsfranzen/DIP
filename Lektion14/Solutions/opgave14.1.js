// opgave14.1.js
import express from 'express';
const app = express();
import { promises as fs } from 'fs';

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

app.get('/', async (request, response) => {
    let html = await GetHtml();
    response.send(html);
});

app.listen(8080);

console.log('Lytter på port 8080 ...');

