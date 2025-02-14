const listPersoner = [];

function addPerson(navn, alder) {
    listPersoner.push({ navn, alder });
    updatePersonList();
}

function updatePersonList() {
    const listDiv = document.getElementById('list');
    let html = '<table><tr><th>Navn</th><th>Alder</th></tr>';
    listPersoner.forEach(person => {
        html += `<tr><td>${person.navn}</td><td>${person.alder}</td></tr>`;
    });
    html += '</table>';
    listDiv.innerHTML = html;
}

document.getElementById('tilføj').addEventListener('click', () => {
    const navn = document.getElementById('navn').value;
    const alder = document.getElementById('alder').value;
    if (navn && alder) {
        addPerson(navn, alder);
    }
});