// iteration.js
let o = { a: 1, 'b': 2, '3': 3 };
for (let n in o)
    console.log(n + ": " + o[n]);

// => 3: 3
// => a: 1
// => b: 2
