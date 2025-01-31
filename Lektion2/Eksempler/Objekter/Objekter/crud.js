// crud.js
let a = 1;
let o = {a, 'b': 2, '3': 3}; // ny property notation med variabel
// let o = {a: a, 'b': 2, '3': 3};
console.log(o);
o.c = 4;
console.log(o);
console.log(o.b); // => 2
o['3'] = 'III';
delete o.b;
console.log(o); // => { '3': 'III', a: 1, c: 4 }
console.log(o.d); // => undefined
console.log('d' in o);  // => false
