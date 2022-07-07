/**
 * Wie findest man die Position eines Elements im Array?
 *
 * mit array.indexOf("getreide")
 * indexOf ist eine Array Methode.
 * Das bedeutet sie ist an dass Array gekoppelt
 */

//             0         1         2         3
const zug = ["lok", "getreide", "autos", "benzin"];
const positionGetreide = zug.indexOf("getreide");
console.log({ positionGetreide });

const positionZehn = [2, 10, 99].indexOf(10);
console.log({ positionZehn });

/**
 * Wie kann man ein Array umdrehen?
 *
 * mit array.reverse()
 *
 */

zug.reverse();
console.log(zug);

/**
 * Wie kann man zwei Arrays zusammenfügen?
 *
 * mit array.concat(zweitesArray)
 *
 * Achtung: Will man das Ergebnis weiter verarbeiten muss man es in einer Variable speichern.
 */

passagierZug = ["lok", "waggon", "waggon"];

const langerZug = passagierZug.concat(zug);
console.log(langerZug);
