// Aufgabe: Wir wollen Kundendaten erfassen, um damit arbeiten zu können.
// Kunde A: 1000€
// Kunde B: 2000€
// Kunde C:  500€
// Kunde D:  900€

// Wir könnten für die einzelnen Daten Arrays erstellen und diese mit den Daten füttern.
const kundennamen = ["Kunde A", "Kunde B", "Kunde C", "Kunde D"];
const umsaetze = [1000, 2000, 500, 900];
const adressen = ["aaaaaaaa", "bbbbbbb", "ccccccc", "ddddddd"];
const sonderwuensche = [null, null, "als Geschenk verpackt", null]

// Um Daten eines Kunden zu bekommen, müssen wir uns mittels Index die richtigen Stellen zusammensuchen.
console.log(kundennamen[0], umsaetze[0]);
console.log(kundennamen[1], umsaetze[1]);
console.log(kundennamen[2], umsaetze[3]);
console.log(kundennamen[3], umsaetze[2]);

console.log("-------");

// Oder: über alle Einträge iterieren.
// In diesem Fall gehen wir nur von der Länge des Arrays kundennamen aus.
// Was ist, wenn ein anderes Array länger oder kürzer ist?
for (let i = 0; i < kundennamen.length; i++) {
    console.log(kundennamen[i], umsaetze[i]);
}

console.log("-------");

// Eine bessere Methode besteht darin, die Daten eines Kunden zusammenzufassen.
// In JavaScript können wir Objects dafür verwenden.
// Ein Object wird mit geschweiften Klammern notiert und darin enthalten sind Key Value Pairs, die sog. Properties.
// Das Object kann beliebig viele Properties enthalten.
// Eine Property kann jeden beliebigen Datentyp enthalten. So sind bspw. auch Arrays und weitere Objects möglich.
const kundeA = {
    kundennummer: 1,
    name: "Kunde A",
    umsatz: 1000,
    // adresse enthält ein weiteres Object mit eigenen Properties.
    // Dadurch lassen sich die Werte besser gruppieren und zuordnen.
    adresse: {
        strasse: "Musterstr.",
        hausnummer: "123a",
        plz: 12345,
        ort: "Musterstadt",
    },
    sonderwunsch: null,
    lieferanweisung: "",
    // Hat der Key Sonderzeichen, müssen wir ihn in Anführungszeichen setzen.
    "hat garage": true,
    // Auch Arrays sind möglich!
    bestellungen: [1001, 1002, 1003, 1004],
};

// Geben wir die Variable aus, erhalten wir das gesamte Object.
console.log(kundeA);

console.log("-------");

// Um nur eine bestimmte Property ausgeben zu lassen, nutzen wir die sog. Dot Notation.
// An den Variablennamen kundeA fügen wir einen Punkt hinzu und anschließend den Key der gewünschten Property.
// Bei unserem Array bestellungen können wir sogar auf einzelne Elemente im Array zugreifen,
// indem wir wie gewohnt die eckigen Klammern mit dem Index anhängen.
console.log(kundeA.name, kundeA.umsatz, kundeA.bestellungen[2]);

console.log("-------");

// Immer dann, wenn Sonderzeichen im Key verwendet werden (siehe oben),
// müssen wir auf eine alternative Schreibweise zurückgreifen: die Bracket Notation.
// Diese ist sieht aus wie bei Arrays, nur dass wir diesmal nicht den Index angeben, sondern den Key als String.
console.log(kundeA["name"], kundeA["umsatz"], kundeA["hat garage"]);

console.log("-------");

// Um auf Properties von Unterobjekten wie in adresse zugreifen zu können,
// können wir die Keys verketten.
// Wir greifen also zu auf: kundeA -> adresse -> ort
console.log(kundeA.adresse.ort);

console.log("-------");

// Die Reihenfolge der Properties spielt bei Objects keine Rolle,
// wenn wir mit der Dot oder Bracket Notation darauf zugreifen wollen.
const kundeB = {
    kundennummer: 2,
    name: "Kunde B",
    umsatz: 2000,
    sonderwunsch: null,
    adresse: {
        ort: "Musterstadt",
        hausnummer: "123b",
        plz: 12345,
        strasse: "Musterstr.",
    },
};
// Auch hier wird uns der Ort aus der Adresse angezeigt, obwohl adresse zuletzt in KundeB gelistet ist
// und ort an erster Stelle (anders als bei kundeA).
console.log(kundeB.adresse.ort);

console.log("-------");

const kundeC = {
    kundennummer: 3,
    name: "Kunde C",
    umsatz: 500,
    adresse: "ccccccc",
    sonderwunsch: "als Geschenk verpackt",
};

const kundeD = {
    kundennummer: 4,
    name: "Kunde D",
    umsatz: 900,
    adresse: "ddddddd",
    sonderwunsch: null,
};

// unsere Kundenobjekte lassen sich genauso in Arrays verpacken wie andere Variablen auch:
const kunden = [kundeA, kundeB, kundeC, kundeD];

// Wir erhalten in kunden ein Array mit Objects, die dann wiederum die Kundendaten enthalten.
console.log(kunden);
