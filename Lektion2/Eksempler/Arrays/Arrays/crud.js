// crud.js
let a = [0, 1, 2, 3];
a[4] = 4;
console.log(a[1]); // => 1
a[2] = 'two';
delete a[3];
console.log(a); // => [ 0, 1, 'two', <1 empty item>, 4 ]