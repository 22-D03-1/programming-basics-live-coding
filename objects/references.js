// Primitives:
// ---------------------------
// - Number
// - String
// - Boolean
// - Symbol
// - null
// - undefined

// Erzeugen wir Variablen mit Primitives,
// Greifen wir über die Variable direkt auf den Wert im Speicher zu.
// Wir stellen uns vor, dass wir ein Dokument (Variable) mit einem Text (String) in der Hand halten.
let a = 12;
console.log(a); // 12

// Ändern wir den Wert einer solchen Variable,
// wird die alte Version gelöscht und mit einer neuen überschrieben.
a++;

// In a haben wir nun den neuen Wert 13 gespeichert.
console.log(a); // 13


// Non-Primitives:
// ---------------------------
// - Object

// Erzeugen wir eine Variable mit einem Non-Primitive,
// handelt es sich dabei um eine Referenz.
// Die eigentlichen Werte - in diesem Fall die Properties x und y - werden im Speicher als Objekt abgelegt,
// in unserer Variable steht aber lediglich eine Referenz dazu.
// Wir stellen uns vor, dass wir einen Ordner mit Dokumenten im Regal stehen haben
// und uns merken, wo er ist, statt ihn mit uns herumzutragen.
const c = {
    x: 1,
    y: 2,
};

console.log(c);

// Ändern wir eine primitive Property wie hier y (Number),
// passiert das gleiche wie oben beschrieben:
// Wir ersetzen den Wert von y mit dem neuen Wert.
// Die Referenz in c bleibt bestehen, da wir nur auf die Variable zeigen.
// Vergleichbar mit unserem Dokument, das wir gegen eine neue Version austauschen.
// Der Ordner bleibt der gleiche und steht weiterhin an der gleichen Stelle im Regal.
c.y++;

console.log(c);

console.log("---------");

// Möchten wir ein Primitive kopieren, können wir das mit einer Zuweisung machen.
// Beim Erstellen der Variable a2 weisen wir ihr den Wert von a zu, da a direkt auf den Wert (13) zeigt.
let a2 = a;
console.log(a2, a);

// Ändern wir a2, bleibt a davon unberührt, da wir den Wert kopiert haben.
a2++;

console.log(a2, a);

// Bei den Non-Primitives können wir zwar auch eine Kopie erstellen.
// Allerdings ist in der Variable nicht das Objekt gespeichert, sondern nur die Referenz.
// Verglichen mit dem Ordner, haben wir in c nicht den Ordner selbst gespeichert,
// sondern nur den Standort im Regal gemerkt ("Oberstes Fach, ganz links").
// Kopieren wir nun diese Referenz in eine neue Variable, zeigen beide weiterhin auf das gleiche Objekt.
const c2 = c;
console.log(c2, c);

// Egal ob wir von c2 oder c auf das Objekt zugreifen:
// Wir verändern stets das eine Objekt, welches von beiden Referenzen erreichbar ist.
c2.x++;
c.y++;

// Somit sind die oben gemachten Änderungen in c und c2 bei beiden Variablen sichtbar.
console.log(c2, c);


console.log("---------");

// Wir können das prüfen, indem wir c und c2 vergleichen.
// Wir prüfen hier, ob die gleiche Referenz vorliegt, was in unserem Fall true ergibt.
console.log(c === c2);


// Um das referenzierte Objekt tatsächlich zu kopieren,
// also neuen Speicher unabhängig vom ersten Objekt zu belegen,
// müssen wir ein neues Objekt erzeugen.
// Als Properties können wir die Properties von c einsetzen.
// Da diese Primitives sind, werden sie kopiert, es wird also ein neuer Speicher belegt.
// const d = {
//     x: c.x,
//     y: c.y,
// };

// Damit wir nicht jede Property einzeln aufführen müssen,
// Können wir mit dem Spread-Operator das Objekt c entpacken
// und dessen Inhalte in ein neues Objekt überführen.
const d = { ...c };

console.log({ d, c2, c });
// Wenn wir jetzt d mit c vergleichen, erhalten wir false,
// da sie auf zwei unterschiedliche Objekte referenzieren.
// Vergleichbar mit zwei unterschiedlichen Adressen:
// Die Häuser an den Adressen können zwar gleich aussehen,
// sind aber zwei eigenständige Häuser.
console.log(c === d);
console.log(c.x === d.x);
console.log(c.y === d.y);


console.log("---------");


// Problematisch wird das Klonen von Objekten,
// wenn Properties selbst Objekte enthalten.
// Diese sind nämlich nach der oben gezeigten Logik auch nur Referenzen
// und haben die gleichen Eigenschaften wie unsere Variablen c, c2 und d.
const e = {
    x: 1,
    y: 2,
    z: {
        a: 1,
        b: 2,
        c: {
            r: 1,
            s: 2,
        },
    },
};

// Eine Möglichkeit, ein sog. Deep Cloning durchzuführen,
// besteht darin, den Spread-Operator auch für alle Unterobjekte anzuwenden.
// Dazu muss aber die Objektstruktur bereits bekannt sein,
// da man alle Properties passend ansprechen muss.
const f = {
    ...e,
    z: {
        ...e.z,
        c: {
            ...e.z.c,
        },
    },
};
// Eine weitere Möglichkeit besteht in der Rekursion,
// bzw. mit einer rekursiven Funktion.
// Das schauen wir uns im Laufe des Kurses noch genauer an.

f.x = 90;
f.y = 100;

f.z.a = 77;
f.z.b = 44;

console.log(e);
console.log(f);

console.log("---------");

// Wenn wir es nur mit "einfachen" Daten zu tun haben,
// Können wir auch mittels JSON.stringify und JSON.parse ein Deep Cloning durchführen.
// Dazu wenden wir zuerst JSON.stringify an.
// Diese Methode wandelt unser Objekt in einen String um.
// Wir haben jetzt ein Primitive und somit keine Referenz mehr!
const g = JSON.stringify(e);

// Der String lässt sich nun ganz einfach kopieren...
let h = g;
// ...und verändern...
h = h.toUpperCase();
// ...ohne dass g mit verändert wird.
console.log(g);
console.log(h);

// Möchten wir jetzt ein Objekt zurückbekommen,
// wenden wir JSON.parse an.
// Dabei wird der String in ein Objekt umgewandelt.
// Es wird somit ein neuer Speicherplatz belegt
// und in i eine Referenz zu diesem Objekt gespeichert.
const i = JSON.parse(g);
console.log(e === i);


console.log("---------");

// Den vorherigen Weg können wir abkürzen,
// indem wir JSON.stringify und JSON.parse in einander verschachteln.
// Zuerst muss also JSON.stringify aufgelöst werden,
// welches einen String zurückgibt.
// Dieser wird direkt an JSON.parse übergeben,
// woraus ein Objekt resultiert, das wir in j referenzieren.
const j = JSON.parse(JSON.stringify(e));

console.log(e);
console.log(j);
console.log(e === j);
