import { listPersoner } from './Storage.js';

export function addPerson(navn, alder) {
	if (!navn || navn.trim() === '') {
		throw new Error('Navn må ikke være tomt');
	}

	const alderNum = Number(alder);
	if (!alder || isNaN(alderNum)) {
		throw new Error('Alder skal være et gyldigt tal');
	}

	listPersoner.push({ navn, alder: alderNum });
	return true;
}

export function findPerson(navn) {
	return listPersoner.find(
		(person) => person.navn.toLowerCase() === navn.toLowerCase()
	);
}

export function filterByAge(alder) {
	return listPersoner.filter((person) => person.alder >= alder);
}

