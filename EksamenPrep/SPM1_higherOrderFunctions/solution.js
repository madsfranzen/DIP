// Lav et array med biler, hvor hver bil er beskrevet ved nummerplade, vægt, mærke og antal hjul.

const car1 = { regNum: 'AD72394', weight: 1200, brand: 'Fiat', numWheels: 4 };
const car2 = { regNum: 'JJ82730', weight: 2500, brand: 'Toyota', numWheels: 4 };
const car3 = { regNum: 'KA88273', weight: 6500, brand: 'Ford', numWheels: 8 };
const car4 = { regNum: 'CN30301', weight: 11000, brand: 'Ford', numWheels: 8 };

const carArray = [car1, car2, car3, car4];

// Nedenstående skal løses ved hjælp af nogle af de indbyggede højere ordens funktioner som f.eks. map, filter, reduce, foreach

// Lav et array med de biler, der har netop 8 hjul.
const carsWith8Wheels = carArray.filter((car) => car.numWheels === 8);
console.log('Cars with 8 wheels: ');
console.log(carsWith8Wheels);

// Lav et array med alle nummerpladernes numre.
const allRegNums = carArray.map((car) => car.regNum);
console.log('All registration numbers: ');
console.log(allRegNums);

// Find den mindste vægt.
const lightestCar = carArray.reduce((lightestCar, car) => {
	return car.weight < lightestCar ? car : lightestCar;
});
console.log('Weight og lightest car:');
console.log(lightestCar.weight);

// Lav et array med alle biler, der har størst antal hjul.
const largestNumOfWheels = carArray.reduce((largest, car) => {
	return car.numWheels > largest ? car.numWheels : largest;
}, 0);

const carsWithLargestWheeels = carArray.filter(
	(car) => car.numWheels === largestNumOfWheels
);
console.log('Cars with largest (' + largestNumOfWheels + ') number of wheels:');
console.log(carsWithLargestWheeels);

// Lav et array af objekter, der giver antal biler for hvert antal hjul, altså f.eks. 7 biler med 4 hjul, 4 biler med 6 hjul osv.
console.log('Cars sorteret efter antal hjul:');
const carsByWheels = carArray.reduce((acc, car) => {
	const wheels = car.numWheels;
	if (!acc[wheels]) {
		acc[wheels] = [];
	}
	acc[wheels].push(car);
	return acc;
}, {});
console.log(carsByWheels);

// Redegør for højere ordens funktioner i Javascript
