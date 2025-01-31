// callback.js
function afvent(i) {
    function callback(){console.log(i);}
    setTimeout(callback, 1000/i);
    console.log('afvent ' + i);
}
afvent(1); // => afvent 1
afvent(2); // => afvent 2
// => 2
// => 1