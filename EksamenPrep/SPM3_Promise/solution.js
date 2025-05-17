console.log();
console.log(` - PROMISE - `);
console.log();

// Funktion der returnerer en Promise som resolves med tal i 17-tabellen, ellers rejectes
function gaetTalISyttenTabel() {
	const delay = Math.floor(Math.random() * 2000) + 1000;
	const randomNumber = Math.floor(Math.random() * 2001); // inkl. 2000

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			randomNumber % 17 === 0
				? resolve(randomNumber)
				: reject(`Ikke i 17-tabellen: ${randomNumber}`);
		}, delay);
	});
}

// Generaliseret funktion der prøver 'attempts' antal gange
async function proevFlereGange(attempts) {
	for (let i = 0; i < attempts; i++) {
		try {
			console.log(`Forsøg #${i + 1}...`);
			const result = await gaetTalISyttenTabel();
			console.log(`Lykkedes på forsøg #${i + 1}`);
			return result;
		} catch (error) {
			console.log(`Fejl på forsøg #${i + 1}: ${error}`);
		}
	}
	throw new Error(`Ingen af de ${attempts} forsøg lykkedes.`);
}

// Kør funktionen
proevFlereGange(1000)
	.then(number => console.log('🎉 Succes! Tallet er deleligt med 17:', number))
	.catch(error => console.error('❌ Error:', error.message));

