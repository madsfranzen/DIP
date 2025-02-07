let string = 'Hej med dig jeg hedder kaj kaj';

console.log(new Set((words = string.toLowerCase().split(' '))).size);

let wordMap = new Map();

for (let str of string.split(' ')) {
	if (wordMap.has(str)) {
		wordMap.set(str, wordMap.get(str) + 1);
	} else {
		wordMap.set(str, 1);
	}
}

console.log(wordMap);
