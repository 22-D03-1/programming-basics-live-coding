/**
 * Wie kann man die Länge von einem Array verändern?
 * - Wie kann man Waggons an einen Zug anhängen oder abhängen?
 */

const telefonbuch = [];
console.log(telefonbuch);

// Push fügt ein Element am Ende ein
// - Ein Waggon wird hinten angehängt
telefonbuch.push("+4912345678");
console.log(telefonbuch);

// Unshift fügt ein Element am Anfang ein
// - Ein Waggon wird ganz vorne angehängt
telefonbuch.unshift("vor nummer");
telefonbuch.push("nach nummer");
console.log(telefonbuch);

telefonbuch.push("+4911111111");
telefonbuch.push("+4922222222");
telefonbuch.push("+4933333333");
telefonbuch.push("+4444444444");
telefonbuch.push("+4955555555");
telefonbuch.push("+4666666666");
console.log(telefonbuch);

// Pop löscht das letzte Element im Array
// - Der letzte Waggon wird abgehängt
telefonbuch.pop();
console.log(telefonbuch);

// Shift löscht das erste Element im Array
// - Der erste Waggon wird abgehängt
telefonbuch.shift();
console.log(telefonbuch);
