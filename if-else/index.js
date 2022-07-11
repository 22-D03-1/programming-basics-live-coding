/**
 * if else
 *
 * Was ist das?
 * Es ist ein Conditional. Auf gut Deutsch eine Weiche mit der man sein Programm auf verschiedene Wege lenken kann.
 * Wenn ein if else wie eine Weiche ist. Dann ist ein Boolean der Weichensteller.
 *
 * Wozu brauch man es?
 * Man kann abhängig von einer "Condition" Code ausführen
 *
 * Stichwort Booleans
 *
 * Wie funktioniert es?
 * Ist die Bedingung zwischen den runden Klammern wahr wird der Code zwischen den geschweiften Klammern ausgeführt
 *
 * if(Bedingung){
 *  Code
 * }
 */

const istHeuteDonnerstag = false;

if (istHeuteDonnerstag) {
    console.log("Es ist Donnerstag");
}

/**
 * else
 *
 * Der else Block wird ausgeführt wenn die Bedingung zwichen den Runden klammern falsch ist
 */

if (istHeuteDonnerstag) {
    console.log("Es ist Donnerstag");
} else {
    console.log("Es ist NICHT Donnerstag");
}

/**
 * if else if ...
 *
 * Man kann das normale if else auch durch weitere if´s und else erweitern
 */

const tag = "Dienstag";

if (tag === "Montag") {
    console.log("Montag");
} else if (tag === "Dienstag") {
    console.log("Dienstag");
} else if (tag === "Mittwoch") {
    console.log("Mittwoch");
} else if (tag === "Donnerstag") {
    console.log("Donnerstag");
} else if (tag === "Freitag") {
    console.log("Freitag");
} else if (tag === "Samstag") {
    console.log("Samstag");
} else {
    console.log("Sonntag");
}
