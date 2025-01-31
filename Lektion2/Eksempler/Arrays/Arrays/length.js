// length.js
let a = [0, 1];
console.log(a.length); // => 2
a.length = 1;
console.log(a); // => [ 0 ]
a[2] = 2;
console.log(a); // => [ 0, <1 empty item>, 2 ]
console.log(a.length);
a.length = 4;
console.log(a); // => [ 0, <1 empty item>, 2, <1 empty item> ]