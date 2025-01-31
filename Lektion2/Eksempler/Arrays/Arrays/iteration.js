// iteration.js
let a = [0, 1, 2, 3, 4];
delete a[2];

let s;
for (let i = 0; i < a.length; i++)
    s += a[i] + ', ';
console.log(s); // => 0, 1, undefined, 3, 4,

s = '';
for (let i in a){
    console.log(i);
    console.log('typeof:' + typeof i);
    s += a[i] + ', ';
}

console.log(s); // => 0, 1, 3, 4,

s = '';
for (let e of a){
    console.log(e);
    s += e + ', ';
}
console.log(s); // => 0, 1, undefined, 3, 4,