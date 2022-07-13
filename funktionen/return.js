/**
 * Return
 *
 * Man kann Datentypen aus einer Funktion "zurückgeben"
 * Man kann also Informationen aus der Funktion mit hinaus nehmen.
 *
 * Der Wert nach dem return nimmt den Platz des Funktionsaufruf ein.
 */

function berechneMehrwertsteuer(preis) {
    const mehrwertsteuer = preis * 0.19;
    return mehrwertsteuer;
}

console.log(berechneMehrwertsteuer(10));

const preisBanane = 2.39;
const steuerBanane = berechneMehrwertsteuer(preisBanane);
console.log("Steuer Banane:", steuerBanane);

/**
 * Vergisst man das return statement, steht an der Stelle des Funktionsaufrufes undefined
 */

function addiere(zahl1, zahl2) {
    const ergebnis = zahl1 + zahl2;
}

console.log("Vergessenes return:", addiere(1, 5));
