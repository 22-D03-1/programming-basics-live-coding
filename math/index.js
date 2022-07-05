// Wir haben verschiedene Möglichkeiten, Zahlen zu runden:
const a = 32.1947;
console.log(a);

console.log("parseInt", parseInt(a)); // ignoriert die Nachkommastellen
console.log("Math.round", Math.round(a)); // rundet auf oder ab
console.log("Math.ceil", Math.ceil(a)); // rundet auf
console.log("Math.floor", Math.floor(a)); // rundet ab
console.log("Number.toFixed", a.toFixed(2)); // rundet auf x Nachkommastellen und wandelt in String um

// Math hat viele nützliche Funktionen!
// Bspw. lassen sich Quadratwurzeln mittels .sqrt() berechnen.
console.log("Math.sqrt", Math.sqrt(684));

// Wir können uns auch eine Pseudozufallszahl ausgeben lassen mit .random().
// Der Wert liegt dabei zwischen 0 und 1
console.log("Math.random", Math.random());

// Mit .max() und .min() können wir die größte/kleinste Zahl aus einer Menge bestimmen.
console.log("Math.max", Math.max(19, 20, 21, 18, 24));
console.log("Math.min", Math.min(19, 20, 21, 18, 24));

console.log("-------")

// Ergebnisse sind nicht immer so, wie wir sie erwarten würden.
// Das liegt daran, dass JavaScript die Darstellung IEEE 754 für Zahlen verwendet.
// Hierbei kann es zu Rundungsfehlern kommen.
console.log(0.2 + 0.1);
console.log(0.2 + 0.2);
console.log(0.2 + 0.3);
console.log(0.2 + 0.4);
console.log(0.2 + 0.5);
console.log(0.2 + 0.6);
console.log("---")
// Das Ergebnis weicht etwas vom erwarteten Ergebnis ab und ist somit nicht gleich.
console.log(0.2 + 0.1 === 0.3);
// Ein Trick ist, die Nachkommastellen zu beseitigen, indem die beiden Zahlen
// mit einem Vielfachen von 10 multipliziert werden
// und das Ergebnis dadurch wieder dividiert wird.
console.log((0.2 * 10 + 0.1 * 10) / 10);
