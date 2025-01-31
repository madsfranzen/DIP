// object.js
let a = [0, 1];
a[-1] = '-1';
a.size = function(){return this.length;};
console.log(a); // => [ 0, 1, '-1': '-1', size: [Function] ]
console.log(a.size()); // => 2
for (let n in a)
    console.log(n + ': ' + a[n]);
// => 0: 0
// => 1: 1
// => -1: -1
// => size: function(){return this.length;}