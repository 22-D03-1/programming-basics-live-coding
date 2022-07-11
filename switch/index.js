/**
 * Was ist ein Switch Statement?
 *
 * Ein switch statement hat Ähnlichkeiten mit einem if else if ... statement -> Siehe /if-else/index.js
 *
 * Was ist der Unterschied zum if else if statement?
 * - Switch statement vergleicht den wert zwischen den klammern switch (wert) immer mit === mit den optionen nach case
 *
 * Wofür braucht man ein switch statement?
 * Man benutzt es immer dann wenn man zwischen festen Optionen auswählen möchte. Zum Beispiel:
 *
 * - Tastatur Eingabe bei einem Computerspiel:
 * Optionen (oben), (links), (rechts), (unten), (leertaste)
 * - Eine Abfrage der verschiedenen Monate, Januar bis Dezember
 *
 *
 */

const tag = "Montag";

switch (tag) {
    case "Montag":
        console.log("Montag");
        break;
    case "Dienstag":
        console.log("Dienstag");
        break;
    case "Mittwoch":
        console.log("Mittwoch");
        break;
    case "Donnerstag":
        console.log("Donnerstag");
        break;
    case "Freitag":
        console.log("Freitag");
        break;
    case "Samstag":
        console.log("Samstag");
        break;
    default:
        console.log("Sonntag");
        // Hier brauch man eigentlich kein break; Aber es sorgt für bessere Lesbarkeit
        break;
}
