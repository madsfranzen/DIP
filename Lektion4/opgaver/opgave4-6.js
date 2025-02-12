const MOUNTAINS = [
	{ name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
	{ name: 'Everest', height: 8848, place: 'Nepal' },
	{ name: 'Mount Fuji', height: 3776, place: 'Japan' },
	{ name: 'Vaalserberg', height: 323, place: 'Netherlands' },
	{ name: 'Denali', height: 6168, place: 'United States' },
	{ name: 'Popocatepetl', height: 5465, place: 'Mexico' },
	{ name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];

const table = document.createElement('table');
table.style.borderCollapse = 'collapse';
table.style.width = '100%';
table.style.maxWidth = '800px';
table.style.marginTop = '20px';

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

Object.keys(MOUNTAINS[0]).forEach((key) => {
	const th = document.createElement('th');
	th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
	th.style.border = '5px solid blue';
	th.style.padding = '8px';
	th.style.backgroundColor = 'lightgray';
	headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

MOUNTAINS.forEach((mountain) => {
	const row = document.createElement('tr');

	Object.values(mountain).forEach((value) => {
		const td = document.createElement('td');
		td.textContent = value;
		td.style.border = '5px solid blue';
		td.style.padding = '8px';
		row.appendChild(td);
	});

	tbody.appendChild(row);
});

table.appendChild(tbody);

// Append table to the body
let tableTitle = document.createElement('h1');
tableTitle.innerText = 'Mountains';
tableTitle.style.color = 'red';
document.body.appendChild(tableTitle);
document.body.appendChild(table);
