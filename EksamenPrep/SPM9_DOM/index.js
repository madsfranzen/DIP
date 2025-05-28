const submitButton = document.getElementById('submitButton');
const firstnameInput = document.getElementById('firstname');
const surnameInput = document.getElementById('surname');
const personListElement = document.getElementById('personList');

const persons = [];

submitButton.addEventListener('click', addToList);

function addToList() {
	let firstname = firstnameInput.value.trim();
	let surname = surnameInput.value.trim();
	persons.push({ firstname: firstname, surname: surname, red: false });

	updateList();
}

function updateList() {
	personListElement.innerHTML = '';

	persons.forEach((person) => {
		const firstname = person.firstname;
		const surname = person.surname;
		const li = document.createElement('li');

		li.innerText = firstname + ' ' + surname;

		if (person.red) {
			li.style.color = 'red';
		} else {
			li.style.color = 'black';
		}

		li.addEventListener('click', function () {
			person.red = !person.red;
			if (person.red) {
				this.style.color = 'red';
			} else {
				this.style.color = 'black';
			}
		});

		personListElement.appendChild(li);
	});
}
