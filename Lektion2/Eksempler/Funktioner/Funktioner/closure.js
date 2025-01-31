// closure.js
function next() {
    let n = 1;
    return function(){return n++;};
}
const next1 = next();
const next2 = next();
console.log(next1()); // => 1
console.log(next1()); // => 2
console.log(next2()); // => 1