/**
 * Der Rest Operator macht aus einzelnen durch , getrennten Werten ein Array
 */

// Anwendung Funktionsparameter

function addiere(ersteElement, ...rest) {
    console.log(ersteElement, rest);
}

addiere(1, 2, 3, 4, 5);

// Anwendung 2, Array destructuring

// Was wenn man den Rest als Array haben will?
const zahlen = [1, 2, 3, 4, 5, 6];
const [, zweitesElement, ...rest] = zahlen;
console.log(zweitesElement, rest);
