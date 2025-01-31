// lokale.js
f();
function f() {
    console.log(g()); // => 1
    
    function g() { 
        return 1; 
    }
    console.log(h()); // => ReferenceError: h is not defined
    const h = function() { return 2; };
}