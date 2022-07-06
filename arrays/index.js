/**
 * Arrays
 *
 * Arrays sind Datentypen in denen man mehrere andere Datentypen speichern kann
 *
 * Vergleichbar ist ein Array mit einem Zug
 * Und das kommt auch nicht von irgendwo her, es sieht nämlich ein bisschen so aus. Mit Fantasie:
 *
 * ["lok", "getreide","autos","benzin"]
 *
 * Wie man sieht erstellt man Arrays mit eckigen Klammern. Und die Elemente darin sind mit Kommas getrennt.
 */

const zug = ["lok", "getreide", "autos", "benzin"];
console.log(zug);

/**
 * Wozu brauch man Arrays?
 * Es gibt mehrere Gründe
 *
 * - Man hat viele Daten. Zum Beispiel hunderte Instagram Follower die man effizient übertragen und verarbeiten will
 *
 * Beispiel: Einen Zug kann man einfach von vorne nach hinten abgehen und sieht dann was er transportiert.
 *
 * - Man hat eine unbekannte anzahl an Daten. Der Vorteil vom Array gegenüber einfachen Variablen ist: Man kann einfach Elemente anhängen oder wieder wegnehmen
 *
 * Info: Die größten zwei "Unbekannten-Verursacher" beim Programmieren sind Server-Abfragen und Nutzereingaben
 *
 * Beispiel: Ein Zug kann eine unbekannte anzahl an Waggons haben.
 * Eine Woche fährt der ICE733 mit 8 Waggons und in der nächsten nur mit 6. Es ist und bleibt aber der ICE733
 *
 *
 */

// Viele Daten
const alleSchuelerGeburtsjahre = [
    "1998",
    "1999",
    "1998",
    "1998",
    "1998",
    "1998",
    "1993",
    "1998",
    "1998",
    "1995",
    "1998",
    "1998",
    "1998",
];
console.log(alleSchuelerGeburtsjahre);

// Unbekannte Anzahl
const telefonbuch = ["+49123343", "+491232137"];
console.log(telefonbuch);
