// arrays.js
let o = {id: 123, '3 tal': [7, 9, 13]};
console.log(Object.keys(o)); // => [ 'id', '3 tal' ]
console.log(Object.values(o)); // => [ 123, [ 7, 9, 13 ] ]
console.log(Object.entries(o)); // => [ [ 'id', 123 ], [ '3 tal', [ 7, 9, 13 ] ] ]

let s = 'Dette er en prøve';
console.log(s.split(' ')); // => [ 'Dette', 'er', 'en', 'prøve' ]