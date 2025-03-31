import express from 'express';
import cors from 'cors';

const app = express();

let beskedID = 0;

class Besked {
    constructor(id, tekst, rumId, tidspunkt) {
        this.id = id;
        this.tekst = tekst;
        this.rumId = rumId;
        this.tidspunkt = tidspunkt;
    }
}

const rum1 = {
    id: 1,
    navn: 'Rum 1',
    beskrivelse: 'Dette er rum 1',
    messages: []
};

const rum2 = {
    id: 2,
    navn: 'Rum 2',
    beskrivelse: 'Dette er rum 2',
    messages: []
};

const rum3 = {
    id: 3,
    navn: 'Rum 3',
    beskrivelse: 'Dette er rum 3',
    messages: []
};

const rum = [rum1, rum2, rum3];

app.use(express.json());
app.use(cors());

app.get('/rum', (req, res) => {
    res.status(200).json(rum);
});

app.get('/beskeder', (req, res) => {
    let beskeder = [];
    for (const r of rum) {
        beskeder.push(...r.messages);
    }
    res.status(200).json(beskeder);
});

app.post('/besked', (req, res) => {
    const besked = new Besked(beskedID++, req.body.tekst, req.body.rumId, new Date());
    for (const r of rum) {
        if (r.id === besked.rumId) {
            r.messages.push(besked);
        }
    }
    res.status(201).json(besked);
});

app.get('/beskeder/:rumId', (req, res) => {
    const rumId = req.params.rumId;
    const beskeder = rum.find(r => r.id === parseInt(rumId)).messages;
    res.status(200).json(beskeder);
});

app.delete('/besked/:id', (req, res) => {
    const messageId = parseInt(req.params.id);
    let deleted = false;
    
    for (const r of rum) {
        const index = r.messages.findIndex(msg => msg.id === messageId);
        if (index !== -1) {
            r.messages.splice(index, 1);
            deleted = true;
            break;
        }
    }
    
    if (deleted) {
        res.status(200).json({ message: "Besked slettet" });
    } else {
        res.status(404).json({ error: "Besked ikke fundet" });
    }
});

app.listen(8000, () => {
    console.log('Server listening on port 8000...');
});
