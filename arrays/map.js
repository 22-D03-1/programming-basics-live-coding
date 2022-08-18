/**
 * Array.map
 *
 * map ist eine Array Methode. Mit map kann man eine Funktion ein mal für jedes Element im Array ausführen. UND ein neues Array in der SELBEN Länge erzeugen. Die Elemente des neuen Arrays sind die returnten Werte der übergeben Funktion.
 *
 */

// Methode 1 - Die übergebene Funktion steht außerhalb

const zahlen = [1, 2, 3];

function zahlMalZwei(zahl) {
    return zahl * 2;
}

const zahlenMalZwei = zahlen.map(zahlMalZwei);
console.log(zahlenMalZwei); // [2, 4, 6]]

// Methode 2 - Die übergeben Funktion ist anonym

const zahlenAufNull = zahlen.map(() => {
    return 0;
});
console.log(zahlenAufNull); // [0, 0, 0]

// Ein neues Array erzeugen in dem alle Elemente durch x ersetzt sind
const neuesArray = zahlen.map(() => {
    return "x";
});
console.log(neuesArray); // [x, x, x]

// Welche Parameter übergibt map noch?

zahlen.map((element, index, array) => {
    console.log(element, index, array);
});

// Beispiel 1:

const worte = ["hallo", "du", "bist", "supertoll"];
const wortLaenge = worte.map((element) => {
    return element.length;
});
console.log(wortLaenge);

// Mit for Schleife

const wortLaenge2 = [];
for (let i = 0; i < worte.length; i++) {
    wortLaenge2.push(worte[i].length);
}
console.log(wortLaenge2);

// Gibt die callback Funktion nichts zurück, wird das neue Array nur aus undefined bestehen
const arrayAusUndefined = worte.map(() => {
    console.log("Ich returne nichts :P");
});
console.log(arrayAusUndefined);
