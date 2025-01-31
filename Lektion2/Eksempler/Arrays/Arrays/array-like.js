// array-like.js
let s = 'abcd', a = [];
console.log(s.length); // => 4
for (let i in s)
    a.push(s[i]);
console.log(a); // => [ 'a', 'b', 'c', 'd' ]
console.log(Array.from(s)); // => [ 'a', 'b', 'c', 'd' ]
s.push('e'); // TypeError: s.push is not a function
