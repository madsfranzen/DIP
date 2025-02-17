import { describe } from "mocha";
import { assert } from "chai";
import { addPerson, findPerson, filterByAge } from "../LogicPersoner.js";
import { listPersoner } from "../Storage.js";

describe("add", () => {
    beforeEach(() => {
        listPersoner.length = 0;
    });

    it("should add 1 new person", () => {
        addPerson("John", 25);
        assert.equal(listPersoner.length, 1);
    });

    it("should add 3 new persons", () => {
        addPerson("Jane", 30);
        addPerson("Alice", 35);
        assert.equal(listPersoner.length, 2);
    });

    it("should not add a person and throw error", () => {
        assert.throws(() => addPerson('', 12), Error, 'Navn må ikke være tomt');
        assert.throws(() => addPerson('Bob', 'abc'), Error, 'Alder skal være et gyldigt tal');
        assert.throws(() => addPerson('Bob', ''), Error, 'Alder skal være et gyldigt tal');
    });
});

describe("find", () => {
    beforeEach(() => {
        listPersoner.length = 0;
        addPerson("Jane", 30);
    });

    it("should find a person", () => {
        const person = findPerson("Jane");
        assert.equal(person.navn, "Jane");
    });

    it("should not find a person", () => {
        const person = findPerson("Bob");
        assert.equal(person, undefined);
    });
});

describe("filter", () => {
    beforeEach(() => {
        listPersoner.length = 0;
        addPerson("Jane", 30);
        addPerson("Alice", 35);
        addPerson("Bob", 40);
    });

    it("should filter by age", () => {
        const result = filterByAge(35);
        assert.equal(result.length, 2);
    });

    it("should not filter by age", () => {
        const result = filterByAge(50);
        assert.equal(result.length, 0);
    });
});