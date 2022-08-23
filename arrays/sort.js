// Wir können in JavaScript mit der Array Methode .sort() ein Array sortieren.
// Dabei müssen wir uns keine Gedanken über den Algorithmus machen,
// den JS im Hintergrund verwendet.
// Je nach Anwendungsfall und JavaScript Engine kann sich dieser nämlich unterscheiden.
const strings = ["Louisa", "Pauline", "Cilly", "Magdalena", "Mareike", "Yessica", "Friederike", "Stella", "Lilli", "Zoe"];

// Rufen wir .sort() auf einem Array mit Strings auf,
// werden diese alphabetisch aufsteigend sortiert.
console.log(strings.sort());

// Den gleichen Effekt könnten wir nun auch bei Zahlen erwarten,
// aber hier zeigt sich ein interessantes Phänomen:
const numbers = [3, 8, 1, 4, 5, 11, 10, 14, 2, 7, 6, 9, 12, 15, 13];
console.log(numbers.sort());
// Die Zahlen werden in .sort() wie Strings behandelt und sortiert.
// Das bedeutet, dass wir nicht den Wert betrachten,
// sondern die einzelnen Ziffern, wie wir es auch mit den Buchstaben in Strings machen würden.
// Dadurch landen die Zahlen 10, 11, 12, 13, 14 und 15 vor der 2,
// da sie mit einer 1 beginnen.


console.log("----");


// Abhilfe schafft hier eine Vergleichsfunktion.
// Wir können an .sort() eine Funktion übergeben, die zwei Parameter enthält: a und b.
// a und b sind zwei Elemente in dem Array, welche mit einander verglichen werden.
// Wir stellen uns vor, dass wir nur diese beiden Werte mit einander vergleichen.
// Als Ergebnis erwartet .sort() einen numerischen Wert, der entweder positiv oder negativ sein kann.
// Geben wir einen negativen Wert zurück, werden a und b nicht getauscht.
// Ebenso wenn wir eine 0 zurückgeben.
// Ist der Wert positiv, so werden a und b getauscht.
console.log(numbers.sort((a, b) => a - b));
//             5   8    => -3  // kein Tausch
//             4   4    =>  0  // kein Tausch
//             9   2    =>  7  // Tausch!


const products = [{
    id: 2,
    company: "Skaboo",
    product: "Cardguard",
    price: 10.99
}, {
    id: 1,
    company: "Quimba",
    product: "Namfix",
    price: 19.99
}, {
    id: 3,
    company: "Flashdog",
    product: "Flowdesk",
    price: 2.99
}, {
    id: 4,
    company: "Tazzy",
    product: "Asoka",
    price: 1.99
}, {
    id: 5,
    company: "Jayo",
    product: "Pannier",
    price: 22.99
}, {
    id: 6,
    company: "Chatterbridge",
    product: "Bitwolf",
    price: 32.99
}, {
    id: 7,
    company: "Devpoint",
    product: "Viva",
    price: 15.99
}, {
    id: 8,
    company: "Twitterlist",
    product: "Flowdesk",
    price: 12.99
}, {
    id: 9,
    company: "Babblestorm",
    product: "Pannier",
    price: 12.99
}, {
    id: 10,
    company: "Jayo",
    product: "Fintone",
    price: 18.99
}];

// Mit der Vergleichsfunktion lassen sich auch Properties in Objekten vergleichen.
// Da a und b jeweils ein Element des Arrays repräsentieren,
// haben wir hier je ein Objekt vorliegen, auf dessen Properties wir zugreifen können.
// Damit wir das oben genannte Prinzip mit den positiven und negativen Werten anwenden können,
// verwenden wir hier einen Ternary Operator, der je nach Ergebnis des Vergleichs 1 oder -1 ausgibt.
console.log(products.sort((a, b) => {
    return a.product > b.product ? 1 : -1;
}))
