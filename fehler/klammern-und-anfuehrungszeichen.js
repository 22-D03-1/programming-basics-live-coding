/**
 *
 *
 * Klammern müssen immer geschlossen werden
 * z.B ()
 * z.B {}
 * z.B []
 *
 *
 */

// FALSCH:
//console.log("Hello World";

// RICHTIG
console.log("Hello World");

/* - - - - - - - - - - - - - - - - */

// FALSCH
//const ergebnis = ( 3 + 4 * 10;

//RICHTIG
const ergebnis = 3 + 4 * 10;

/**
 *
 *
 * String müssen immer geschlossen werden
 * z.B ""
 * z.B ''
 * z.B ``
 *
 *
 */

// FALSCH
//console.log("Tschau);

// RICHTIG
console.log("Tschau");

/* - - - - - - - - - - - - - - - - */

// FALSCH
//const meinName = 'Hans;

// RICHTIG
const meinName = "Hans";

/* - - - - - - - - - - - - - - - - */

// FALSCH
//let farbe = `Rot;

// RICHTIG
let farbe=`Rot`;

/**
 *
 * Anführungszeichen in Anführungszeichen müssen entweder
 * A: Escaped werden (mit \)
 * B: Es müssen andere Anführungszeichen verwendet werden
 *
 */

// FALSCH
//console.log("Ella sagt: "Hallo"");

// RICHTIG
// prettier-ignore
console.log("Ella sagt: \"Hallo\"");

// RICHTIG
console.log('Ella sagt: "Hallo"');
