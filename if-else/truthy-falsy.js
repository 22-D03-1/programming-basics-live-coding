/*
 * Um genau zu sein wird Code in einem if statement ausgeführt
 * falls die Bedingung zwischen den Klammern "truthy" is
 */

// Beispiele für truthy Werte

if (true) console.log(`true ist truthy`); // was auch sonst ;)
if (1) console.log(`1 ist truthy`);
if (42) console.log(`42 ist truthy`);
if ("hallo du da") console.log(`strings mit Inhalt sind truthy`);
if ({}) console.log("Objekte sind truthy");
if ([]) console.log("Arrays sind truthy");

// Beispiele für falsy Werte

if (false) console.log(`Kommt nie!`);
else console.log(`false ist falsy`); // was auch sonst ;)

if (0) console.log(`Kommt nie!`);
else console.log(`0 ist falsy`);

if (null) console.log(`Kommt nie!`);
else console.log(`null ist falsy`);

if (undefined) console.log(`Kommt nie!`);
else console.log(`undefined ist falsy`);

if ("") console.log(`Kommt nie!`);
else console.log(`Ein leerer String ist falsy`);

if (NaN) console.log(`Kommt nie!`);
else console.log(`NaN ist falsy`);
