class Person {
    constructor(name) {
        this.name = name;
        this.group = null;
    }
    toString() {
        if (this.group) {
            return this.name + " (" + this.group.getName() + ")";
        } else {
            return this.name + " (ingen gruppe)";
        }
    }
    getName() {
        return this.name;
    }
}

class Group {
    constructor(name) {
        this.name = name;
        this.people = [];
    }

    add(person) {
        this.people.push(person);
        person.group = this;
    }

    remove(person) {
        this.people = this.people.filter(p => p !== person);
        person.group = null;
    }

    toString() {
        return "Group: " + this.people.map(p => p.getName()).join(", ");
    }

    getName() {
        return this.name;
    }
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let p3 = new Person("Ida");
let g1 = new Group("Gruppe 1");
g1.add(p1);
g1.add(p2);

console.log(p1.toString());
console.log(p2.toString());
console.log(p3.toString());
console.log(g1.toString());
