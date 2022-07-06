/**
 * Es gibt drei Arten string zu definieren
 *
 */

// 1 - mit normalen ""

const einString = "Der Hund ist blau";
console.log(einString);

// 2 - mit einfachen ''

//prettier-ignore
const zweiString = 'Die Katze trinkt Milch';
console.log(zweiString);

// 3 - mit backticks ``
// Mit backticks kann man in Strings JavaScript ausführen

const haustierName = "Rudolf";
const dreiString = `Der Hamster heißt ${haustierName}`;
console.log(dreiString);
