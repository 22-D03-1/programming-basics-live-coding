/**
 * Parameter
 *
 * Was ist ein Parameter?
 * Mit Parametern kann man Datentypen in eine Funktion übergeben
 * Die Parameter werden in der Funktion zu einer Variable
 */

function sagHalloZu(name) {
    console.log(`Hallo ${name}`);
}

sagHalloZu("Marcel");
sagHalloZu("Leo");
sagHalloZu("Mounssif");

/**
 * Eine Funktion kann mehrere Parameter haben.
 * Diese sind durch Komma getrennt
 */

function multiply(zahl1, zahl2) {
    console.log("multiply", zahl1 * zahl2);
}

multiply(2, 3);
multiply(10, 3);

/**
 * Was passiert wenn man vergisst einen Paramater zu übergeben?
 * Vergisst man einen Parameter zu übergeben ist dieser undefined
 */

function addiere(zahl1, zahl2) {
    console.log("addiere", zahl1, zahl2);
    console.log("addiere", zahl1 + zahl2);
}

addiere(2);
addiere(100, 10);
