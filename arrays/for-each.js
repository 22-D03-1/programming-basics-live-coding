/**
 * Array.forEach
 *
 * forEach ist eine Array Methode. Mit forEach kann man eine Funktion ein mal für jedes Element im Array ausführen.
 * 
 * 
 * Tatsächlich gehören Arrays zu den Objekten
 * 
 *
 * const test = {
 *    sagHallo: function(){}
 * }
 *
 * // sagHallo ist eine Methode
 *
 */

// Ein Array ist ein Object
const zahlen = [1, 2, 3, 4, 5];
console.log("zahlen ist vom typ:", typeof zahlen);
console.log("Ist es ein Array: ", Array.isArray(zahlen));

// Methode 1 - Die übergebene Funktion steht außerhalb

function druckeZahl(element) {
    console.log("Zahl:", element);
}

zahlen.forEach(druckeZahl);

// Methode 2 - Die übergeben Funktion ist anonym

zahlen.forEach((element) => {
    console.log("Auch Zahl:", element);
});

// Welche Parameter übergibt forEach noch?

const buchstaben = ["a", "b", "c"];

buchstaben.forEach((element, index, array) => {
    console.log("Buchstabe:", element, index, array);
});

// Vergleich mit for Schleife

for (let i = 0; i < buchstaben.length; i++) {
    console.log("Buchstabe2:", buchstaben[i], i, buchstaben);
}
