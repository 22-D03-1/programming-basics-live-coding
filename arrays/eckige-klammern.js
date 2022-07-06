/**
 * Wie kann man Elemente aus einem Array untersuchen?
 * - Wie kann man in die einzelnen Waggons schauen?
 */

//             0         1         2         3
const zug = ["lok", "getreide", "autos", "benzin"];
console.log(zug);
// Um einen Waggon unter die Lupe zu nehmen schreibt man eckige klammern und darin die Nummer des Waggons
console.log(zug[1]);
console.log(zug[3]);

//                         0       1     2
const gemischtesArray = [true, "hallo", 123];
console.log(gemischtesArray);
console.log(gemischtesArray[1]);
// Existiert der Waggon nicht wird undefined ausgelesen
console.log(gemischtesArray[3]);

/**
 * Wie kann man Elemente im Array bearbeiten?
 */

//               0         1          2            3
const ice733 = ["lok", "waggon", "speisewagen", "waggon"];
console.log(ice733);
ice733[2] = "waggon";
console.log(ice733);
