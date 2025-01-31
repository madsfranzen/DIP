// scope.js
function f(max) {
    let sum = 0;
    for (let i = 1; i <= max; i++) { 
        sum += i; 
    }
    console.log(max); // => 10
    console.log(sum); // => 55
    console.log(i); // => ReferenceError: i is not defined
}
f(10);