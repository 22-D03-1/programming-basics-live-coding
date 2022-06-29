/**
 * Es gibt verschiedene Datentypen in JavaScript
 * Strings = Text
 * Numbers = Zahlen
 * Booleans = Wahrheitswerte, true oder false
 * Null = Null
 * Undefined = Undefined
 */

// Mit dem Gleichzeichen legt men einen Wert in die Variable
let marvinsNachname = "Scheffold";
console.log(marvinsNachname);
// Bei let Variablen kann man den Wert ändern bzw. der Variable einen neuen Wert zuweisen
marvinsNachname = "Müller";
console.log(marvinsNachname);

let anzahlBravecoders = 18;
console.log(anzahlBravecoders);

// In Konstanten kann man nur EIN MAL einen Wert ablegen
// Danach kann er nie mehr verändert werden.
const sindBravecodersCool = true;
console.log(sindBravecodersCool);
// Die folgende Zeile gibt einen Error
//sindBravecodersCool = false;

// Let Variablen kann man auch deklarieren und erst mal leer lassen
// Ist eine Variable leer dann ist ihr Inhalt = undefined
let meineLieblingsfrucht;
console.log(meineLieblingsfrucht);

// Will man dagegen dass eine Variable "leer" bleibt.
// Legt man null darin ab.
let dieseBoxSollLeerSein = null;
console.log(dieseBoxSollLeerSein);
