// Wir haben die folgende Funktion erhalten, die wir für zwei Aufträge verwenden wollen.
// Die Funktion selbst dürfen wir nicht verändern, aber beliebig oft ausführen.

// Wichtig:
// Unsere zwei Aufträge sollen mit beliebig vielen Zufallszahlen funktionieren.
// Wir müssen daher darauf achten, dass unser Algorithmus mit unterschiedlichen Mengen arbeiten kann.

function getRandomNumbers(amount) {
    const numbers = Array();

    for (let i = 0; i < amount; i++) {
        numbers.push(parseInt(Math.random() * 100));
    }

    return numbers;
}


// Beispiel: gib 10 Zufallszahlen aus und speichere sie in der Variable randomNumbers
const randomNumbers = getRandomNumbers(60);
console.log(randomNumbers);

// --------------------------------------------------------------------------

// 1. Gib die Anzahl der Zahlen unter 50 aus.
// Gib zur Kontrolle auch das Array der Zufallszahlen aus.

// Beispiel:
// getRandomNumbers(5) => [1, 59, 40, 50, 99]
// Ausgabe:
// Es gibt 2 Zahlen unter 50.

// Teste deinen Algorithmus mit den Anzahlen 10, 20, 100 und beliebig vielen weiteren.


// Lösung:
// - Leere Strichliste anlegen
let strichliste = 0;

// - Jede Zahl durchgehen
for (let i = 0; i < randomNumbers.length; i++) {
    // - Überprüfen, ob sie unter 50 ist
    if (randomNumbers[i] < 50) {
        // - Wenn ja: Strich auf Strichliste setzen
        strichliste++; // Kurzform von: strichliste = strichliste + 1;
    }
}
// - Anzahl von Strichliste ausgeben
console.log(`Es gibt ${strichliste} Zahlen unter 50.`);



// --------------------------------------------------------------------------

// 2. Gib zwei Arrays aus: Eines mit den Zahlen unter 50, und eines mit den Zahlen größer oder gleich 50.
// Gib zur Kontrolle auch das Array der Zufallszahlen aus.

// Beispiel:
// getRandomNumbers(5) => [1, 59, 40, 50, 99]
// Ausgabe:
// Zahlen unter 50: [1, 40]
// Zahlen größer oder gleich 50: [59, 50, 99]

// Teste deinen Algorithmus mit den Anzahlen 10, 20, 100 und beliebig vielen weiteren.


// Lösung:
// - Lege Liste für <50 an
const kleiner50 = [];
// - Lege Liste für >=50 an
const groesser50 = [];

// - Gehe jede Zahl durch
for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] < 50) {
        //      - Wenn Zahl < 50: Zahl auf Liste <50 notieren
        kleiner50.push(randomNumbers[i]);
    } else {
        //      - Ansonsten: Zahl auf Liste >=50 notieren
        groesser50.push(randomNumbers[i]);
    }
}

// - Liste <50 ausgeben
console.log("Zahlen unter 50:", kleiner50);
// // - Liste >=50 ausgeben
console.log("Zahlen größer oder gleich 50:", groesser50);
