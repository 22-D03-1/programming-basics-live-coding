// Damit wir bestimmte Eigenschaften und Methoden in unseren Klassen
// Buntstift und Bleistift nicht wiederholen müssen,
// lassen sich die Gemeinsamkeiten auslagern und in einer sog. Oberklasse zusammenlegen.
// Wir beschreiben hier einen allgemeinen Stift mit Eigenschaften und Methoden,
// die für Stifte generell gelten.

class Stift {
    // Die Klasse Stift sieht mit ihrem Konstruktor und ihren Methoden wie eine gewöhnliche Klasse aus.
    constructor({ strichstaerke }) {
        this.strichstaerke = strichstaerke;
    }

    zeichneStrich(anfang, ende) {
        console.log(`Strich in ${this.strichstaerke}mm Stärke`, anfang, ende);
    }

    zeichneViereck(position, laenge, breite) {
        console.log("Zeichne Viereck:", position, { laenge, breite });
    }
}

// Wenn wir nun eine Sonderform des allgemeinen Stifts haben wollen,
// können wir mittels Vererbung die Eigenschaften und Methoden in eine sog. Unterklasse "kopieren".
// Die Klasse Bleistift ist also eine spezielle Form des Stifts.
class Bleistift extends Stift {
    // Da wir die Methode zeichneStrich anpassen wollen,
    // überschreiben wir sie in der Unterklasse.
    // zeichneStrich aus der Oberklasse wird also durch die Version aus der Unterklasse ersetzt.
    zeichneStrich(anfang, ende) {
        console.log(`Bleistift-Strich in ${this.strichstaerke}mm Stärke`, anfang, ende);
    }

    // Wir haben in Bleistift automatisch auch Zugriff auf zeichneViereck,
    // da diese Methode in der Oberklasse definiert wurde.
    // Wir müssen sie in der Unterklasse nicht noch einmal aufführen.

    // Die Unterklasse können wir beliebig mit weiteren Methoden erweitern.
    // So ließe sich bspw. die Methode anspitzen hinzufügen,
    // die nur in Buntstift, nicht aber in Stift verfügbar ist.
    anspitzen() {
        console.log("Bleistift ist angespitzt");
    }
}

class Buntstift extends Stift {
    // Wollen wir zusätzliche Eigenschaften über den Konstruktor definieren,
    // überschreiben wir in der Unterklasse den Konstruktor der Oberklasse.
    // WICHTIG: Damit das funktioniert, müssen wir trotzdem noch den Konstruktor der Oberklasse aufrufen.
    // Das geschieht mit super(), den wir behandeln, als würden wir eine neue Instanz der Oberklasse erzeugen.
    constructor({ farbe, strichstaerke }) {
        super({ strichstaerke }); // vergleichbar mit: this = new Stift({ strichstaerke });
        // Nachdem wir mit super den Konstruktor der Oberklasse aufgerufen haben,
        // steht uns this zur Verfügung und wir können bspw. weitere Eigenschaften anhängen.
        this.farbe = farbe;
    }

    zeichneStrich(anfang, ende) {
        console.log(`Strich in ${this.farbe} in ${this.strichstaerke}mm Stärke`, anfang, ende);
    }
}



const roterStift = new Buntstift({ farbe: "rot", strichstaerke: 1 });
roterStift.zeichneStrich({ x: 1, y: 1 }, { x: 5, y: 5 });
roterStift.zeichneViereck({ x: 6, y: 10 }, 20, 30);

console.log("---");

const blauerStift = new Buntstift({ farbe: "blau", strichstaerke: 2 });
blauerStift.zeichneStrich({ x: 4, y: 2 }, { x: 12, y: 18 });

console.log("---");

const bleistift = new Bleistift({ strichstaerke: 0.2 });
bleistift.zeichneStrich({ x: 9, y: 10 }, { x: 15, y: 15 });
bleistift.zeichneViereck({ x: 14, y: 7 }, 46, 13);
bleistift.anspitzen();
