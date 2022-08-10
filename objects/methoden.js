/**
 * Methoden
 * Methoden sind Eigenschaften eines Objekts mit einer Funktion als Wert
 */

const auto = {
    //  Name: Wert
    //  Key: value
    farbe: "rot",
    marke: "Ferrari",
    geschwindigkeit: "230",
    preis: 299999,
    baujahr: 1994,
    istOldtimer: true,
    bauorte: ["Modena", "Roma", "Maranello"],
    verbrauchPro100klm: 18,
    tankinhalt: 180,
    // Wenn eine Funktion in einer Objekteigenschaft liegt heißt sie Methode
    getRestDistanceInKm: function () {
        return (this.tankinhalt / this.verbrauchPro100klm) * 100;
    },
};

const auto2 = {
    //  Name: Wert
    //  Key: value
    farbe: "blau",
    marke: "BMW",
    geschwindigkeit: "280",
    preis: 299999,
    baujahr: 1994,
    istOldtimer: true,
    bauorte: ["München"],
    verbrauchPro100klm: 10,
    tankinhalt: 130,
    // Wenn eine Funktion in einer Objekteigenschaft liegt heißt sie Methode
    getRestDistanceInKm: function () {
        //console.log("This Objekt", this);
        return (this.tankinhalt / this.verbrauchPro100klm) * 100;
    },
};

console.log("Rest auto1", auto.getRestDistanceInKm());
console.log("Rest auto2", auto2.getRestDistanceInKm());

// Das gleiche ohne Methode

function getRestDistanz() {
    //console.log("This funktion", this);
    return (auto.tankinhalt / auto.verbrauchPro100klm) * 100;
}

console.log(getRestDistanz());
