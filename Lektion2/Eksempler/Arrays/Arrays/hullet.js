// hullet.js
let a = [0, 1];
a[4] = 4;
console.log(a); // => [ 0, 1, <2 empty items>, 4 ]
console.log(a.toString()); // => 0,1,,,4
console.log(a.length); // => 5
console.log(a[3]);