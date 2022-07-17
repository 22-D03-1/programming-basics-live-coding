// Unsere Variablen sind nicht immer überall verfügbar. Grund dafür sind die sog. Scopes.
// Wir unterscheiden zwischen drei Scopes: global, function und block

// global scope
// -------------------------------------
// Werden Variablen in der "Hauptebene" deklariert, sind sie überall verfügbar.
// Sie befinden sich also im global scope.
var a = 1;
const b = 2;
let c = 3;

console.log("global", a, b, c);

// function scope
// -------------------------------------
// Deklarieren wir Variablen innerhalb einer Funktion,
// erreichen wir diese nur in der Funktion selbst.
function doSomething() {
    var d = 4;
    const e = 5;
    let f = 6;

    // d, e und f sind hier innerhalb der Funktion aufrufbar.
    console.log("function", d, e, f);
    // Ebenso haben wir Zugriff auf unsere globals a, b und c.
    console.log("function", a, b, c);

    // Geben wir weder var noch let oder const an,
    // Wird die Variable automatisch zum global scope zugeordnet.
    // Das kann nicht nur verwirrend, sondern auch gefährlich werden
    // und ist somit möglichst zu vermeiden.
    test = 10;

    // d, e und f existieren nach Funktionsende nicht mehr.
    // Zusätzlich sind sie außerhalb der Funktion nicht mehr aufrufbar.
}


doSomething();
// Hier geben wir die globale "test" aus,
// die wir in der Funktion deklariert haben.
console.log("test", test);
// Der folgende console.log wirft einen Fehler, weil d, e und f
// nur im function scope von doSomething() existieren:
// console.log("global", d, e, f);


// block scope
// -------------------------------------
// Variablen lassen sich außerdem noch in sog. block scopes eingrenzen.
// WICHTIG: für var gilt dies nicht, was wir an der Variable g sehen werden!
{
    var g = 7;
    const h = 8;
    let i = 9;

    // Wie auch schon beim function scope, sind die Variablen
    // nur begrenzt verfügbar, nämlich nur innerhalb der geschweiften Klammern.
    console.log("block", g, h, i);
}

// Da g als var deklariert wurde, ist sie trotzdem auch außerhalb des blocks verfügbar.
// var kennt keine blocks, sondern nur global und function scopes.
console.log("global", g);

// Der folgende console.log wirft einen Fehler, weil h und i
// nur im block scope (Zeilen 52-60) existieren:
// console.log("global", h, i);

// Ein bekanntes Beispiel für Variablen in block scopes ist unsere Hilfsvariable in for-loops.
// Der Iterator i ist nur innerhalb der Schleife definiert.
// console.log("global vor dem loop", i);
for (let i = 0; i < 5; i++) {
    console.log("in loop", i);
}
// console.log("global nach dem loop", i);

console.log("-------------");


// Variablen werden an untergeordnete scopes weitergegeben (vgl. Parent-Child-Beziehung).
// Wir können in untergeordneten scopes den gleichen Variablennamen verwenden.
// Dabei wird die übergeordnete Variable im aktuellen scope ersetzt.
const myVariable = 1;

function testFunction() {
    const myVariable = 2;
    console.log("in function", myVariable); // Gibt 2 aus

    {
        const myVariable = 3;
        console.log("in function in block", myVariable); // Gibt 3 aus
    }
}

testFunction();

console.log("global", myVariable); // Gibt 1 aus
