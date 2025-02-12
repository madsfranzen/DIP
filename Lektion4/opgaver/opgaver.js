// Tilføj kode for opgave 4.1 - 4.5 her!

let allh1 = document.querySelectorAll('h1');

for (let h1 of allh1) {
	h1.nextElementSibling.nextElementSibling.style.color = 'brown';
	let inner = h1.nextElementSibling.innerHTML;
	h1.nextElementSibling.outerHTML = '<h2>' + inner + '</h2>';
}

let allli = document.querySelectorAll('li');
for (let index = 0; index < allli.length; index += 2) {
	const element = allli[index];
	element.style.backgroundColor = 'lightgray';
}

const links = document.createElement('div');

for (let index = 0; index < allh1.length; index++) {
	const element = allh1[index];
	element.setAttribute('id', `heading-${index}`);

	const link = document.createElement('a');
	link.href = `#heading-${index}`;
	link.textContent = index + 1 + ': ' + element.innerText;
	link.style.display = 'block';

	links.appendChild(link);
}

document.body.insertBefore(links, document.body.firstChild);
