/**
 * Array.reduce
 *
 * reduce ist eine Array Methode. Mit reduce kann man Elemente in einem Array auf einen bestimmten wert reduzieren.
 *
 */

const zahlen = [1, 2, 3, 4, 5];
const summe = zahlen.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr;
}, 0);

console.log(summe);

// Strings zusammenfügen

const namen = ["stephie", "ella", "marcel", "leo"];

const alleNamen = namen.reduce((prev, curr) => {
    console.log("prev:", prev);
    console.log("curr:", curr);
    return prev + " | " + curr;
}, "start");

console.log("Ergebnis:", alleNamen);

// Prev nochmal im Detail
// Das was im vorherigen Durchlauf returned wurde ist im aktuellen Durchlauf in prev enthalten.

const fruechte = ["banane", "apfel", "mango"];
const alleFruechte = fruechte.reduce((prev, curr) => {
    console.log("prev:", prev);
    console.log("curr:", curr);
    return "hallo";
}, "start");

// Man kann reduce auch benutzen um dinge zu sortieren.

const gemueseUndFruechte = ["banane", "gurke", "mango", "tomate"];
const gemueseUndFruechteSortiert = gemueseUndFruechte.reduce(
    (prev, curr) => {
        if (curr === "banane" || curr === "mango") {
            prev.fruechte.push(curr);
        } else {
            prev.gemuese.push(curr);
        }
        return prev;
    },
    { gemuese: [], fruechte: [] }
);

console.log(gemueseUndFruechteSortiert);

// Lösung mit for schleife

const gemueseUndFruechteSortiert2 = { gemuese: [], fruechte: [] };
for (let i = 0; i < gemueseUndFruechte.length; i++) {
    const element = gemueseUndFruechte[i];
    if (element === "banane" || element === "mango") {
        gemueseUndFruechteSortiert2.fruechte.push(element);
    } else {
        gemueseUndFruechteSortiert2.gemuese.push(element);
    }
}
console.log(gemueseUndFruechteSortiert2);
