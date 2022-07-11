/**
 * Mit break und continue kann man den Ablauf von Schleifen verändern
 *
 * Break:
 * Wird in der Schleife break; aufgerufen wird die Schleife sofort verlassen.
 *
 *
 */

for (let i = 0; i <= 10; i++) {
    console.log("break beispiel:", i);
    if (i === 5) break;
}

/**
 * Continue:
 * Wird in der Schleife continue aufgerufen wird der aktuelle Schleifendurchlauf übersprungen
 */

for (let j = 0; j <= 10; j++) {
    if (j === 5) continue; // Die 5 fehlt in der Konsole
    console.log("continue beispiel:", j);
}
