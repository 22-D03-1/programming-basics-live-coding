/**
 * Array Destructuring
 */

const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Die erste Zahl in einer Variable ablegen
const ersteZahl = zahlen[0];
const zweiteZahl = zahlen[1];

// Und dann die Variable ausdrucken
console.log(ersteZahl, zweiteZahl);

// ------------- Und jetzt mit Destructuring ------------------------

// Das erste und zweite Element aus dem Array zahlen in eigenen Variablen ablegen
const [ersteZahl_2, zweiteZahl_2] = zahlen;
// Und dann die Variable ausdrucken
console.log(ersteZahl_2, zweiteZahl_2);

// Was wenn man nicht nur Elemente vom Anfang will?
const [erstesElement, , drittesElement] = zahlen;
console.log(erstesElement, drittesElement);

// Was wenn man den Rest als Array haben will?
const [, , , viertesElement, ...rest] = zahlen;
console.log(viertesElement, rest);

/**
 * Object destructuring
 */

const plant = {
    name: "Ficus Microcarpa",
    origin: "Australia",
    height: "30m",
    isEdible: false,
    alwaysGreen: true,
};

const plantHeight = plant.height;
const plantName = plant.name;
console.log(plantHeight, plantName);

// ------------- Und jetzt mit Destructuring ------------------------

const { height, name } = plant;

console.log(height, name);

// Was wenn man doch neue Variablen Namen braucht?

const { height: newHeight, name: newName } = plant;

console.log(newHeight, newName);

// Was wenn man undefined verhindern will, falls die Object Property nicht existiert?

const { isEdible, maxAge = 10 } = plant;
console.log(isEdible, maxAge);

// Was wenn man den Rest als Objekt will?

const { name: plantName2, height: plantHeight2, ...plantRest } = plant;
console.log(plantName2, plantHeight2, plantRest);

// Anwendungsbeispiel 1:

function printPlant({ name, origin, height, ...rest }) {
    console.log(
        `Die Pflanze ${name} kommt aus ${origin} und wird ${height} hoch.`
    );
    console.log(rest);
}

printPlant(plant);

// Anwendungsbeispiel 2:
const response = {
    statusCode: 200,
    statusMessage: "ok",
    data: { name: "Marvin", city: "Berlin", isLoggedIn: true },
};

console.log(response.data.isLoggedIn);

// Nested destructuring
const {
    data: { isLoggedIn, city },
} = response;

console.log(isLoggedIn, city);
