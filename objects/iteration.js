/**
 * Wie iteriert man durch ein Objekt?
 *
 * Erinnerung: Durch Arrays kann man mit for oder while Schleife iterieren
 *
 * Gesprochen: "for in Schleife"
 * for(propertyName in object)
 *
 * ACHTUNG: for in geht nur bei Objects
 */

const car = {
    brand: "BMW",
    ps: 399,
    year: 1992,
    maxSpeed: 180,
};

for (const propertyName in car) {
    console.log(propertyName);
}

// Es gibt noch eine for Schleife
// Die "for of Schleife"
// Die for(element of array) Schleife

// ACHTUNG: for of geht nur bei Arrays!

const arr = ["Banane", "Apfel", "Melone"];

for (element of arr) {
    console.log(element);
}

/**
 * Wie kann man die object propertyNames in ein Array verwandeln?
 */

const propertyNamesAsArray = Object.keys(car);
console.log(propertyNamesAsArray);

/**
 * Wie kann man die object property values in ein Array verwandeln?
 */

const propertyValuesAsArray = Object.values(car);
console.log(propertyValuesAsArray);
