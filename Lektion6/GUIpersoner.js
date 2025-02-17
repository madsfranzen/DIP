import { addPerson, findPerson, filterByAge } from './LogicPersoner.js';
import { listPersoner } from './Storage.js';

function updatePersonList(personer = listPersoner) {
    const listDiv = document.getElementById('list');
    let html = '<table><tr><th>Navn</th><th>Alder</th></tr>';
    personer.forEach((person) => {
        html += `<tr><td>${person.navn}</td><td>${person.alder}</td></tr>`;
    });
    html += '</table>';
    listDiv.innerHTML = html;
}

document.getElementById('tilføj').addEventListener('click', () => {
    const navn = document.getElementById('navn').value;
    const alder = document.getElementById('alder').value;

    try {
        addPerson(navn, alder);
        updatePersonList();
    } catch (error) {
        alert(error.message);
    }
});

document.getElementById('søgNavn').addEventListener('click', () => {
    const søgeNavn = document.getElementById('søgeNavn').value;
    const result = findPerson(søgeNavn);
    if (result) {
        updatePersonList([result]);
    } else {
        alert('Person ikke fundet');
    }
});

document.getElementById('filterAlder').addEventListener('click', () => {
    const minimumAlder = document.getElementById('minimumAlder').value;
    if (minimumAlder) {
        const filtered = filterByAge(minimumAlder);
        updatePersonList(filtered);
    }
});

document.getElementById('clearSøg').addEventListener('click', () => {
    document.getElementById('søgeNavn').value = '';
    updatePersonList();
});

document.getElementById('clearFilter').addEventListener('click', () => {
    document.getElementById('minimumAlder').value = '';
    updatePersonList();
});
