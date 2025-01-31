// rest-spread.js
function sum(a, b, ...RestenAfArgumenterne) {
    let sum = a + b;
    for (let e of RestenAfArgumenterne)
        sum += e;
    return sum;
}

console.log(sum(1)); // => NaN
console.log(sum(1, 2)); // => 3
console.log(sum(1, 2, 3, 4)); // => 10

let IndreArray = [1, 2, 3];
console.log(IndreArray); // => [ 1, 2, 3 ]
let stortArray=[0, ...IndreArray, 4];
console.log([0, ...IndreArray, 4]); // => [ 0, 1, 2, 3, 4 ]
