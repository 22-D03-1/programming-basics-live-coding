const text = "  Lorem Ipsum Dolor sit Dominik amet.    ";

console.log(text);
// Wir können Strings über diverse Methoden verändern.
// Wenn ihr "text." eintippt, zeigt euch VS Code eine Übersicht der Methoden mit entsprechender Erklärung an.
console.log(text.toLowerCase());
console.log(text.toUpperCase());

console.log(text.length);

console.log(text.substring(2, 13));
console.log(text.substring(14));

console.log("------");

// Einige Methoden geben uns wieder einen String zurück.
// Auf diesen können wir weitere Funktionen anwenden oder Properties wie "length" auslesen.
console.log(text.trim().length);
console.log(text.trim().toUpperCase());

console.log("------");

// Wenn wir ein Zwischenergebnis mehrfach verwenden wollen, macht es Sinn,
// dieses in eine Variable zu speichern.
// So vermeiden wir, dass wir die Logik wiederholen müssen (in diesem Fall .trim()).
const trimmedText = text.trim(); // => "Lorem Ipsum Dolor sit amet."
const trimmedTextUppercase = trimmedText.toUpperCase();
const trimmedTextLowercase = trimmedText.toLowerCase();

console.log(trimmedText.length);
console.log(trimmedTextUppercase);
console.log(trimmedTextLowercase);

console.log("------");

// Aufgabe: Gib die einzelnen Kanäle mit der jeweiligen Bezeichnung aus: "rot: x, grün: y, blau: z"
const color = "rgb(199, 222, 200)";

// Wir schreiben zuerst die einzelnen Schritte in eigenen Worten auf.
// Dadurch teilen wir das Problem in viele kleine Teilschritte auf, die wir nacheinander lösen können.
// Sollten wir nicht wissen, wie wir etwas im Code schreiben müssen, haben wir dadurch auch
// eine ganz konkrete Suchanfrage und finden schneller ein Ergebnis.

// 1. Rot extrahieren
// 2. Grün extrahieren
// 3. Blau extrahieren
// 4. Ergebnis ausgeben

// Stehen die Schritte fest, ergänzen wir sie mit dem passenden Code.

// 1. Rot extrahieren
const rot = color.substring(4, 7);
// 2. Grün extrahieren
const gruen = color.substring(9, 12);
// 3. Blau extrahieren
const blau = color.substring(14, 17);
// 4. Ergebnis ausgeben
const ergebnis = `rot: ${rot}, grün: ${gruen}, blau: ${blau}`;
console.log(ergebnis);

// Erwartetes Ergebnis:
// => rot: 199, grün: 222, blau: 200

console.log("------");

// Versucht, Bedingungen und Berechnungen in Variablen zwischenzuspeichern.
// Das macht euren Code lesbarer, da man die Logik nicht zwingend verstehen muss, um die Bedingung zu bearbeiten.

// if (a < b && c >= d) {
//     // ...
// }

// Besser so:
// const isValid = a < b && c >= d;
// if (isValid) {
//     // ...
// }


// Aufgabe: Prüfe, ob der Suchbegriff im Text enthalten ist.
const bigText = 'Monotonectally redefine alternative e - business through superior solutions.Quickly transition out - of - the - box niche markets whereas standards compliant e - markets.Competently optimize out - of - the - box e - tailers without next - generation paradigms. Professionally conceptualize best - of - breed sources before optimal results.Progressively maximize B2B materials rather than client - focused core competencies.Holisticly evisculate visionary alignments without multifunctional technologies. Compellingly brand premier intellectual.';

const searchTerm = "Dominik";


// 1. Text lesen und Name suchen
const isInText = bigText.includes(searchTerm); // => true/false

// 2. Antwort sagen
console.log(isInText);

// Erwartetes Ergebnis:
// Wenn Dominik in Text enthalten ist, gib "true" aus
// Wenn Dominik nicht in Text enthalten ist, gib "false" aus

console.log("------");

// Aufgabe: Erhöhe den Rot-Kanal um 100 und gib nur den Rot-Kanal aus
const color2 = "rgb(20, 100, 0)"

// 1. Rot extrahieren
const rot2 = color2.substring(4, 6);
// Wir wandeln den String in eine Number um.
// Dafür haben wir mehrere Optionen:
// const rotNumber = parseInt(rot);
// const rotNumber = Number(rot);
const rotNumber = +rot2;

// 2. Rot um 100 erhöhen
const hellrot = rotNumber + 100;

// 3. Rot ausgeben
console.log(hellrot);

console.log("------");

// Dieser String kann nicht in eine Number umgewandelt werden,
// weil das "a" nicht als Ziffer interpretiert werden kann.
// Das Ergebnis ist "NaN".
// NaN => Not a Number
const weirdNumber = "123a4567";
console.log(weirdNumber);
console.log(+weirdNumber);

console.log("------");


// Wir können Zahlen in binär und hexadezimal ausgeben,
// indem wir die Funktion .toString() mit der entsprechenden Basis verwenden.
const testnumber = 205;

console.log(testnumber); // => 205
console.log(testnumber.toString()); // => "205"
console.log(testnumber.toString(16)); // => "cd"
console.log(testnumber.toString(2)); // => "11001101"
