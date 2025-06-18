console.clear();

class Person {
	age;
	height;

	constructor(age, height) {
		this.age = age;
		this.height = height;
	}
}

function randomNumber(ceiling) {
	let numberOfCalls = 0;
	return {
		generate: function generate() {
			numberOfCalls++;
			return Math.floor(Math.random() * ceiling);
		},
		getNumberOfCalls: () => numberOfCalls,
	};
}

const ageGenerator = randomNumber(100);
const heightGenerator = randomNumber(200);

heightGenerator.generate();

function createRandomPersons(ageGenerator, heightGenerator) {
	const personArray = [];
	for (let i = 0; i < 20; i++) {
		const person = new Person(
			ageGenerator.generate(),
			heightGenerator.generate()
		);
		personArray.push(person);
	}
	return personArray;
}

console.log(createRandomPersons(ageGenerator, heightGenerator));
console.log(`AgeGenerator was called ${ageGenerator.getNumberOfCalls()} times`);
console.log(
	`HeightGenerator was called ${heightGenerator.getNumberOfCalls()} times`
);
