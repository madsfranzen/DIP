// opgave10.2.js

class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }
    equals(p) { return this.navn === p.navn && p.prototype === this.prototype; }
    static compare(p1, p2) { return p1.navn.localeCompare(p2.navn); }
}

class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; };
    equals(s) { return this.prototype === s.prototype && this.id === s.id && this.navn === s.navn; }
}

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);

let k1 = new Kat("Mia");    
let k2 = new Kat("Mia");

let liste = [p1, p2, s1, s2, k1, k2];

console.log(p1.equals(p2));

console.log(liste);
liste.sort((a, b) => Person.compare(a, b));
console.log(liste);