/**
 * Classes
 *
 * Was ist eine JavaScript class?
 * Eine Klasse ist eine "Vorlage" für ein Objekt.
 * Mit const instanz = new KlassenName() erzeugt man eine neues Objekt das so aussieht wie es die "Vorlage" fest legt. Das nennt man dann auch eine Instanz der Klasse.
 */

const datumInstanz = new Date(); // Eine Instanz der Date Klasse wird erzeugt.
console.log(datumInstanz);
console.log(datumInstanz.getDate());
console.log(datumInstanz.getFullYear());

/**
 * Wie erstellt man seine eigene Klasse?
 * Was ist wichtig:
 * class, constructor(), eine Klasse braucht einen Namen,
 */

class MyDate {
    constructor(text) {
        console.log("Constructor der MyDate Klasse");
        console.log("Parameter Text:", text);
    }
    toString() {
        return "Hallo";
    }
}

const myDateInstanz = new MyDate("Banane");
console.log(myDateInstanz);

/**
 * Was sind Methoden?
 * Gibt es in Klassen ein this?
 *
 * Ein Anwendungsbeispiel:
 */

class Car {
    constructor(color, numberOfDoors, brand) {
        this.color = color;
        this.numberOfDoors = numberOfDoors;
        this.brand = brand;
        this.buildYear = new Date().getFullYear();
        this.inventor = "Marvin";
    }
    start() {
        console.log("Brumm brumm, der Motor wackelt");
        console.log(`Es ist ein ${this.brand}`);
        console.log("Das Auto läuft");
    }
}

const marvinsCarInstanz = new Car("red", 4, "BMW");
console.log(marvinsCarInstanz);
console.log(marvinsCarInstanz.brand); // BMW
marvinsCarInstanz.start();

const marcelsCarInstanz = new Car("blue", 2, "Porsche");
marcelsCarInstanz.start();

/**
 * Eine Klasse ist wie eine Vorlage für ein Objekt.
 * Damit lassen sich ganz leicht viele Objekte der selben Art erstellen.
 */

console.log(marvinsCarInstanz.constructor.name); // Gibt uns den Namen der Klasse
