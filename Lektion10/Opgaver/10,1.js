// opgave10.1.js
class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }
}
class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; };
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);

let liste = [p1, p2, s1, s2];

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

class Animal {
    constructor(navn, age) {
        this.navn = navn;
        this.age = age;
    }
    toString() {
        return "Animal: " + this.navn + " " + this.age;
    }
}

let a1 = new Animal("Hund", 5);
let a2 = new Animal("Kat", 3);

let liste2 = [a1, a2];
console.log(liste2);

Animal.prototype.canRun = function () {
    console.log(this.navn + " is Running!");
};

a1.canRun();
a2.canRun();

class Human extends Animal {
    constructor(name, age, money) {
        super(name, age);
        this.money = money;
    }

    canEarn() {
        console.log(this.navn + " is earning money!");
    }
}

let h1 = new Human("Viggo", 20, 1000);
let h2 = new Human("Børge", 21, 1000);

h1.canEarn();
h2.canEarn();