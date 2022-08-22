const names = ["Sören", "Edgar", "Richard", "Iann", "Justus", "Patrik", "Floris", "Helge", "Maria", "Lasse", "Tommy", "Alex"];


// Fall 1: Jede Person stellt sich selbst kurz vor.
// Für jeden Namen wir die Funktion greet einmal ausgeführt.
// Bei 12 Namen haben wir also 12 Ausführungen.
// Bei 6 Namen wären es nur 6 Ausführungen,
// bei 100 wären es 100 Ausführungen usw.
let counter1 = 0;
names.forEach(greet);
// Wir können das verallgemeinern und sagen:
// Bei n Personen führen wir n Aktionen aus.
// Wir notieren das als O(n).
// Das ist die sog. Big O Notation und beschreibt die Komplexität eines Algorithmus.

function greet(name) {
    console.log(`Hi, ich bin ${name}!`);
    counter1++;
}

// Zur Bestimmung und Kontrolle haben wir den counter1 mitlaufen lassen.
// Mit jeder Aktion zählen wir den Counter um 1 hoch
// und lassen uns schließlich das Endergebnis anzeigen.
console.log({ length: names.length, counter: counter1 });


console.log("---");


// Fall 2: Jede Person stellt sich selbst kurz vor und begrüßt jede andere Person.
// Wir führen also für jeden Namen in names die Funktion greetAll aus.
// Diese gibt die Vorstellung aus und startet zusätzlich noch eine Schleife über alle Namen in names.
// Bei 12 Personen geben wir 12 Vorstellungen aus und iterieren 12 mal über alle 11 anderen Namen.
// Bei 6 Personen geben wir 6 Vorstellungen aus und iterieren 6 mal über alle 5 anderen Namen.
let counter2 = 0;
names.forEach(greetAll);
// Da jede Person mit jeder Person (sich selbst und den anderen) eine Aktion ausführt,
// können wir verallgemeinert sagen:
// Bei n Personen führen wir n*n, also n^2 Aktionen aus.
// Wir notieren das als O(n^2).

function greetAll(myName) {
    console.log(`Hi, ich bin ${myName}!`);
    counter2++;

    names.forEach(name => sayHelloTo(name, myName));
}

function sayHelloTo(name, myName) {
    if (name === myName) return;
    console.log(`- Hallo ${name}!`);
    counter2++;
}

console.log({ length: names.length, counter: counter2 });


console.log("---");


// Nicht immer lässt sich die Komplexität eindeutig bestimmen.
// Oftmals hängt diese von den Eingabeparametern ab.
// Im folgenden Beispiel wollen wir eine Vorstellung ausgeben
// und zusätzlich darauf hinweisen, wenn der Name kurz ist.

// Es gibt hierbei zwei Fälle zu betrachten:
// Entweder hat niemand einen kurzen Namen.
// Dann bekommen wir die wenigsten Ausgaben angezeigt.
// Wir sprechen hier vom "best case", da dieser Fall am schnellsten durchläuft.
const longNames = ["Sören", "Edgar", "Richard", "Iann", "Justus", "Patrik", "Floris", "Helge", "Maria", "Lasse", "Tommy", "Alex"];

// Im schlimmsten Fall haben wir es nur mit kurzen Namen zu tun.
// Dann muss jede Person eine zusätzliche Ausgabe machen.
// Wir sprechen hier vom "worst case", da dieser Fall am längsten dauert.
const shortNames = ["Sör", "Edg", "Ric", "Ian", "Jus", "Pat", "Flo", "Hel", "Mar", "Las", "Tom", "Ale"];

let counter3 = 0;

longNames.forEach(name => {
    console.log(`Hi, ich bin ${name}!`);
    counter3++;

    if (name.length <= 3) {
        console.log("Mein Name ist kurz");
        counter3++;
    }
});
console.log({ length: longNames.length, counter: counter3 });


console.log("---");


let counter4 = 0;

shortNames.forEach(name => {
    console.log(`Hi, ich bin ${name}!`);
    counter4++;

    if (name.length <= 3) {
        console.log("Mein Name ist kurz");
        counter4++;
    }
});
console.log({ length: shortNames.length, counter: counter4 });
