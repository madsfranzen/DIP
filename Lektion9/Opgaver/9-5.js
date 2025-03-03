// Opgave 9.5
// Implementer et Observer pattern på følgende måde:
// • Observers implementeres som funktioner, der kaldes, når de "notifies".
// • Et Subject defineres som en subject funktion, der har et array med observers som lokal variabel
// • Funktionen subject skal desuden definere funktionerne registerObserver og notifyObservers som
// indre funktioner og returnere dem som metoder i et object. Afprøv implementationen med et par observers.

function Subject() {
    let observers = [];

    function registerObserver(observer) {
        observers.push(observer);
    }

    function notifyObservers(data) {
        observers.forEach(observer => observer(data));
    }

    function removeObserver(observer) {
        observers = observers.filter(o => o !== observer);
    }

    return {
        registerObserver,
        notifyObservers,
        removeObserver
    }
}

function Observer(id) {
    return function (data) {
        console.log(`Observer ${id} notified with data:`, data);
    }
}

let subject = Subject();
let observer1 = Observer(1);
let observer2 = Observer(2);
let observer3 = Observer(3);

subject.registerObserver(observer1);
subject.registerObserver(observer2);

subject.notifyObservers({ message: "Hello, Observers!" });

subject.removeObserver(observer1);
subject.registerObserver(observer3);

subject.notifyObservers({ message: "Hello, Observers!" });