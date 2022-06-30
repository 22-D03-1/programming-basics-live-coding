/**
 *
 * Konstanten kann man keinen neuen Wert zuweisen
 *
 */

const iban = "1234 2222 5500 1000";
// FALSCH
//iban = "leer";

/**
 *
 * Konstanten muss man sofort einen Wert zuweisen
 *
 */

// FALSCH
//const bank;

// RICHTIG
const bank = "Sparkasse";

/**
 *
 * Zischen let, const und var UND dem Namen
 * der Variable muss ein Leerzeichen sein
 *
 */

// FALSCH
//letalter = 33;

// RICHTIG
let alter = 33;

/**
 *
 * Es darf nur eine Variable mit dem selben Namen deklariert werden
 * Schreibt man let, const oder var, wird ja eine neue Box "aufgebaut"
 * Es können keine zwei Boxen mit dem selben Namen aufgebaut werden
 */

let hauptstadt = "Berlin";

// FALSCH
//let hauptstadt = "Madrid";

// RICHTIG
hauptstadt = "Madrid";

/**
 *
 *
 * Ein Variablenname darf nicht mit einer Zahl (0,1,2,3,4,5,6,7,8,9)
 * beginnen
 *
 *
 */

// FALSCH
//let 99luftballons = "uncool";

// RICHTIG
let neunUndNeunzigLuftballons = "uncool";

// RICHTIG
let luftballons99 = "cool";

// RICHTIG
let x99Luftballons = "cool";
