/**
 * Was ist eine rekursive Funktion?
 * Eine Funktion die sich selber aufruft
 *
 * Wichtig: Entweder man baut eine Bedingung ein welche die "Rekursion" stoppt. Oder man benutzt setTimeout um NodeJS/Browser die Möglichkeit zu geben andere Dinge währenddessen zu erledigen.
 */

function addiere1(zahl) {
    console.log(zahl);

    // Lösung 1:
    //if (zahl === 100) return;

    // Lösung 2:
    if (zahl < 100) {
        addiere1(zahl + 1);
    }
}
//addiere1(1);

/**
 * Kleine Exkursion und Überleitung zu Callbacks
 * So könnte man eine endlosschleife ohne Error bauen
 */
function addiere2(zahl) {
    console.log(zahl);

    setTimeout(() => {
        addiere2(zahl + 1);
    }, 10);
}
//addiere2(1);

/**
 * Anwendung: Fakultäten berechnen
 * Tipp: Eigentlich ist hierfür aber eine Schleife besser
 */
function getFacultyOf(number) {
    if (number === 0) return 1;
    return number * getFacultyOf(number - 1);
}

console.log(getFacultyOf(4));

/**
 * Anwendung 2: Bäume durchsuchen
 * Zum Beispiel: Eine Funktion die alle HTML Tags eines HTML Dokuments aufschreibt. -> Implementieren wir im nächsten Modul
 */
