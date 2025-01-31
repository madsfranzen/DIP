// metode.js
let x = 1;
let o = {x: 2, getX(){return this.x;}}; // ny metode notation
console.log(o);
// let o = {x: 2, m: function(){return this.x;}};
console.log(o.getX()); // => 2
console.log(o["getX"]()); // => 2
let f = o.getX;
console.log(f()); // => undefined
let g = function(){return x};
console.log(g()); // => 1
o.getX = g;
console.log(o.getX()); // => 1
