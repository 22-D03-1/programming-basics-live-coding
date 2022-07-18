// Pure Functions sind vorhersagbar:
// bei gleichen Argumenten geben sie immer das gleiche Ergebnis zurück
function greet(name) {
    return `Hallo ${name}!`;
}

console.log(greet("Dominik"));
console.log(greet("Edwin"));
console.log(greet(1));
console.log(greet("Klasse"));
console.log(greet("Klasse"));
console.log(greet("Klasse"));


console.log("------");

// Variable im Global Scope
let a = 0;

// Functions mit Side Effects manipulieren Werte außerhalb ihres Scopes,
// bzw. greifen auf äußere Scopes zu.
// Das bedeutet, dass wir nicht genau vorhersagen können, welches Ergebnis wir erhalten.
// Rufen wir countUp() mehrfach auf,
// gibt uns die Funktion jeweils andere Werte zurück.
function countUp() {
    a++;
    return a;
}

// // a: 0
console.log(countUp());
// Zum Vergleich: unsere Pure Function greet() gibt uns immer das erwartete Ergebnis zurück.
console.log(greet("Klasse"));
// // a: 1

// // a: 1
console.log(countUp());
// // a: 2

// // a: 2
console.log(countUp());
// // a: 3

// // a: 3
console.log(countUp());
// // a: 4

// // a: 4
console.log(countUp());
console.log(greet("Klasse"));
// // a: 5
// // a: 5
console.log(countUp());
// // a: 6

// // a: 6
console.log(countUp());
// // a: 7


console.log("------");

let b = 0;

// Wir können versuchen, die Side Effects loszuwerden.
// Folgende (sinnlose) Funktion gibt uns die globale Variable b zurück.
function returnB() {
    return b;
}

// Rufen wir returnB() auf, erhalten wir den aktuellen Wert von b.
console.log(returnB());
console.log(returnB());

// Ändern wir b in der Zwischenzeit ab,
// wirkt sich das auch auf das Ergebnis von returnB() aus.
b = b + 7;
console.log(returnB());
console.log(returnB());


console.log("------");
let c = 0;

// Um das Problem zu umgehen, schreiben wir die Funktion so um,
// dass sie nicht mehr abhängig vom Global Scope ist.
// Alles, was die Funktion verarbeitet, übergeben wir mittels Parameter.
function returnValue(value) {
    return value;
}

// Wir haben somit die Änderung des Return Statements vermieden...
console.log("c", c);
console.log(returnValue(c));

c = c + 5;

console.log("c", c);
// ...und stellen die Änderung von c nur noch im Aufruf selbst dar.
// Hier wird also ersichtlich, dass wir mit c arbeiten.
console.log(returnValue(c));
console.log(returnValue("test"));
console.log(returnValue(123));


console.log("------");

// Stichwort Unveränderlichkeit von Variablen:
// Wir können Variablen zwar manipulieren,
// ihre Werte also verändern oder sogar neu zuweisen.
// Das sorgt aber dafür, dass wir myVariable nicht klar benennen können.
// Ebenso müssen wir genau darauf achten, an welcher Stelle wir auf myVariable zugreifen.
// Das erschwert die Lesbarkeit und sorgt für Kopfschmerzen beim Debugging.
// Außerdem können irreführende Fehlermeldungen auftreten,
// die das eigentliche Problem nicht abbilden.
let myVariable = "a a a a a a a a a a. b b b b b b b b b b. c c c c c c c c c c. d d d";
myVariable = myVariable.split(" ");
myVariable = myVariable.slice(0, 10);
myVariable = myVariable.join(" ");

console.log(myVariable);

// Sorgen wir dafür, dass unere Variablen nur einmalig zugewiesen werden
// und legen wir für jede Veränderung eine neue Variable an,
// haben wir eine Art "Speicherpunkte" in unserem Code.
// Wir können zu jeder Zeit prüfen, ob die richtigen Daten vorhanden sind.
// Ebenso ist die Benennung eindeutig: In der Variable steckt drin, was dran steht.
const text = "a a a a a a a a a a. b b b b b b b b b b. c c c c c c c c c c.";
const words = text.split(" ");
const trimmedWords = words.slice(0, 10);
const trimmedText = trimmedWords.join(" ");

// Wir haben sogar die Möglichkeit, an jeder Stelle
// (nach der Deklaration und innerhalb des Scopes) auf die Variablen zuzugreifen.
// So können wir bequem debuggen, indem wir schauen,
// ab welchem Schritt das Teilergebnis vom erwarteten Wert abweicht.
console.log(text, words, trimmedWords, trimmedText);
