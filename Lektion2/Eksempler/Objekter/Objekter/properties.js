// properties.js
let o = {a: 1, 'b': 2, '3': 3};

console.log(o.a); // => 1
console.log(o['a']); // => 1
// console.log(o[a]); // => ReferenceError: a is not defined

console.log(o.b); // => 2
console.log(o['b']); // => 2

console.log(o['3']); // => 3
console.log(o[3]); // => 3
// console.log(o.3); // => Compile error
