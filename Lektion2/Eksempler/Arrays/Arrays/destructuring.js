// destructuring.js
let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // => 10
console.log(b); // => 20
console.log(rest); // => [30, 40, 50]

[a, b] = [b, a];
console.log(a); // => 20
console.log(b); // => 10

let { x, z } = { x: 1, y: 2, z: 3 };
console.log(x); // => 1
console.log(z); // => 3