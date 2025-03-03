
// Opgave 9.4
// a. Lav en function Compose(f1, f2, a), der tager to funktioner og et tal som parametre og returnerer f1(f2(x)). 
// Altså beregner f2(x) og beregner f1(resultatet).

// b. Lav compose om, så den ikke modtager x som parameter, men kun f1 og f2. Den skal så
// returnere en funktion, der beregner f1(f2(x)). Denne kaldes også f1 o f2.

// c. Lav Compose om (eller lav en ny), der tager et array af funktioner [f1, f2, ...fn] og returnerer f1 o
// f2 o ... o fn

function Compose(f1, f2, a) {
    return f1(f2(a));
}

console.log(Compose(Math.sqrt, Math.abs, -25));

function Compose2(f1, f2) {
    return function(x) {
        return f1(f2(x));
    }
}

console.log(Compose2(Math.sqrt, Math.abs)(-25));

function Compose3(...functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    }
}

console.log(Compose3((x => x * 2), (x => x + 3), (x => x - 4))(5));