// Lav en klasse Bil. Den skal have bilmaerke og pris som private properties og en toString() metode med en fornuftig implementation.

// Den skal have en constructor, der modtager disse to værdier og kaster en exception, hvis de ikke er angivet eller er af forkert type.

class Car {
	#brand;
	#price;
	static #numOfCars = 0;

	constructor(brand, price) {
		if (typeof brand != 'string') {
			throw new TypeError('Brand must be a string.');
		} else if (!Number.isFinite(price)) {
			throw new TypeError('Price must be a number.');
		} else {
			Car.#numOfCars++;
			this.#brand = brand;
			this.#price = price;
		}
	}

	toString() {
		return `Brand: ${this.#brand}, Price: ${this.#price}`;
	}

	static getNumOfCars() {
		return Car.#numOfCars;
	}
}

// Lav en subklasse Varevogn med lasteevne (i kg) som ekstra property og en modificeret toString() metode samt en constructor, der kaster en exception, hvis lasteevne ikke er angivet.

class Van extends Car {
	#loadCapacity;

	constructor(brand, price, loadCapacity) {
		if (!loadCapacity) {
			throw new Error('Loadcapacity must be initialized.');
		} else {
			super(brand, price);
			this.#loadCapacity = loadCapacity;
		}
	}

	toString() {
		return `${super.toString()}, Load capacity: ${this.#loadCapacity} kg`;
	}
}

// Test med et array af forskellige bilobjekter.

const carArray = [];

const car1 = new Car('Ford', 12000);
carArray.push(car1);
const car2 = new Car('Toyota', 8000);
carArray.push(car2);
const van1 = new Van('Mercedes', 25000, 5000);
carArray.push(van1);

console.log('Cars:');
carArray.forEach((car) => console.log(car.toString()));

// Modificer Bil, så antal oprettede biler gemmes i en property på Bil.

console.log(`Number of Cars: ${Car.getNumOfCars()}`);

// Gør rede for arv i JavaScript.
