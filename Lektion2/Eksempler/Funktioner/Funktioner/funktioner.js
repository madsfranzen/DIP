// funktioner.js
function f(i) { return 2 * i; }
console.log(f(1)); // => 2

const g = function(i) { return 2 * i; };
console.log(g(2)); // => 4

const h = i => 2 * i;
console.log(h(3)); // => 6

const h0 = () => 8;
console.log(h0()); // => 8

const h2 = (i,j) => { return i * j; };
console.log(h2(2,5)); // => 10