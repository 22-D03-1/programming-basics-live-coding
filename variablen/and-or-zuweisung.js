/**
 * Variablen mit dem OR || Operator zuweisen
 *
 * Ist einer von beiden Werten truthy wird der ausgewählt.
 * Sind beide Werte truthy wird er erste ausgewählt.
 * Sind beide Werte falsy wird zweite ausgewählt.
 */

const value1 = null;
const value2 = "Hallo";

const derWahreWert = value1 || value2;

console.log(derWahreWert);

/**
 * Wird häufig benutzt um default Werte zu vergeben wenn
 * der eigentliche Wert falsy ist bzw. nicht existiert.
 */

const serverAntwortFollower = null;
//const serverAntwortFollower = ["Benni123", "juliaxsd"];

const defaultFollow = ["Du hast noch keine Follower"];

const showUser = serverAntwortFollower || defaultFollow;
console.log(showUser);

/**
 * Variablen mit dem AND && Operator zuweisen
 *
 * Ist der erste Wert truthy wird der zweite Wert genommen
 * Ist der erste Wert falsy wird der erste Wert genommen
 */

const value3 = true;
const value4 = "swsws";
const ergebnis = value3 && value4;
console.log(ergebnis);

// Beispiel:
const darfUserBildSehen = false;
const bild = "Das Bild";
const output = darfUserBildSehen && bild;
console.log(output);
