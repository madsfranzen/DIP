// return.js
function f() {}
console.log(f()); // => undefined

function g(i) { if (i < 0) return; else return i; }
console.log(g(-1)); // => undefined
console.log(g(2)); // => 2