/**
 *
 * Das Problem:
 *
 * Wie macht man aus Datentypen die keine Boolens sind Booleans?
 *
 * Wie finden wir raus ob 10 > 6 ist?
 *
 * Wie finden wir raus ob "Hallo" = "Hallo" ist?
 *
 * Lösung: Mit Conditionals
 *
 * a === b -> Ist a gleich b?
 * a !== b -> Ist a nicht gleich b?
 * a >=  b -> Ist a größer gleich b?
 * a >   b -> Ist a größer als b?
 * a <=  b -> Ist a kleiner gleich b?
 * a <   b -> Ist a kleiner als b?
 */

const istDreiGleichVier = 3 === 4;
console.log({ istDreiGleichVier });

const istDreiGleichDrei = 3 === 3;
console.log({ istDreiGleichDrei });

const zahl1 = 10;
const zahl2 = 15;
const istZahlZweiGroesserAlsZahlEins = zahl2 > zahl1;
console.log({ istZahlZweiGroesserAlsZahlEins });
console.log("Ist zahl2 nicht gleich zahl1", zahl2 !== zahl1);

const password = "123456";
// Mit string.length kann man die Länge eines Strings abrufen
const laengeDesPassworts = password.length;
console.log({ laengeDesPassworts });

const MIN_PASSWORD_LENGTH = 7;
const istPassWordSicher = password.length >= MIN_PASSWORD_LENGTH;
console.log({ istPassWordSicher });

const istAGleichB = "a" === "b";
console.log({ istAGleichB });
