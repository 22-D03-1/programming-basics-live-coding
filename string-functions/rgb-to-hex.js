// RGB => HEX
const color = "rgb(229, 13, 218)";


// 1. Kanäle extrahieren
const red = +color.substring(4, 7);
const green = +color.substring(9, 11);
const blue = +color.substring(13, 16);

// Wenn ihr nach jedem Schritt einen console.log() über eure Variablen macht,
// könnt ihr sicherstellen, dass ihr den Schritt richtig ausgeführt habt.
// Sollte hier etwas nicht stimmen, könnt ihr den Fehler bereits beseitigen,
// bevor ihr weitermacht.
console.log(red, green, blue);


// 2. Kanäle zu HEX umformen
const redHex = red.toString(16);
const greenHex = green.toString(16);
const blueHex = blue.toString(16);


// 3. Kanäle auf zwei Stellen auffüllen
const redHexPadded = redHex.padStart(2, "0");
const greenHexPadded = greenHex.padStart(2, "0");
const blueHexPadded = blueHex.padStart(2, "0");


// 4. Ausgabe erstellen
const result = `#${redHexPadded}${greenHexPadded}${blueHexPadded}`;
console.log(result);
