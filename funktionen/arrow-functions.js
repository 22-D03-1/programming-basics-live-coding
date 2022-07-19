// Funktionen lassen sich kürzer schreiben,
// indem wir sie als Arrow Functions notieren.
// Eine "klassische" function:
function sumA(x, y) {
    return x + y;
}

// Eine Arrow Function, die in einer Variable gespeichert ist:
const sumB = (x, y) => {
    return x + y;
};

// Haben wir nur einen Ausdruck innerhalb der Funktion (hier: x + y),
// können wir auf die geschweiften Klammern verzichten.
// Ebenso wird das Ergebnis des Ausdrucks aus der Funktion zurückgegeben.
const sumC = (x, y) => x + y;

// Alle drei Funktionen erzeugen das gleiche Ergebnis.

console.log("sumA", sumA(1, 2));
console.log("sumB", sumB(1, 2));
console.log("sumC", sumC(1, 2));


console.log("------");

// Da wir Arrow Functions in Variablen speichern,
// gelten für sie die gleichen Regeln wie für alle anderen Variablen.
// Wir können unsere Funktion log() hier also noch nicht aufrufen,
// Da sie erst später deklariert wird.

// log("my custom log function");

// Bei Arrow Functions mit nur einem Parameter
// können die runden Klammern ebenfalls weggelassen werden:
const log = message => console.log(message);
// So wird deutlich, was eine Arrow Function darstellt:


// const log = message         =>       console.log(message);
//                |            |               |
//       Aus der Eingabe     folgt        das Ergebnis


// Hier ist der Aufruf möglich:
log("my custom log function");


console.log("------");

// Default Values
// ----------------------------------------------
// Aufgabe:
// Schreibe eine Funktion, die eine Person begrüßt.
// Wenn der Name nicht bekannt ist, soll die Welt begrüßt werden.
// Beispiel:
// Peter => Hallo Peter!
//  => Hallo Welt!

// Wird der Parameter name beim Aufruf nicht übergeben,
// erhält er den Wert "Welt" und ist somit nicht undefined.
// Wird der Parameter name übergeben, verhält sich dieser wie bereits bekannt.
function hello(name = "Welt") {
    return `Hallo ${name}!`;
}

console.log(hello("Peter"));
console.log(hello("Andi Feind"));
console.log(hello());


console.log("------");

// Default Values können Fehler verhindern,
// wobei hier aber darauf geachtet werden muss,
// dass sie nicht versehentlich etwas verschleiern.
// Eine Funktion, die ein Array erwartet, um bspw. join() darauf auszuführen,
// wird mit dem Default Value [] zwar nicht fehlschlagen,
// aber garantiert das eigentliche Ziel verfehlen.
function doSomething(arr = []) {
    const result = arr.join(",");
    return result;
}

console.log(doSomething(["a", "b", "c", "d"])); // => "a,b,c,d"
console.log(doSomething()); // => "" <-- Ist ein leerer String wirklich gewünscht?
