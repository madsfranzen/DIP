// default.js
function f(a, b = '.') {
    return a + b;
}
console.log(f(1, 2)); // => 3
console.log(f(3)); // => 3.

function megetLang(p1 = 'a ', p2, p3, p4, p5, p6 = ' f') {
    return p1 + p2 + p3 + p4 + p5 + p6
}
console.log(megetLang('a', 'b', 'c', 'd'))
console.log(megetLang())
