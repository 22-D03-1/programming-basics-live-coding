/**
 * Array.filter
 *
 * filter ist eine Array Methode. Mit filter kann man im Array nach Elementen suchen die eine Bedingung erfüllen. Array.filter gibt ein Array zurück mit den gefundenen Elementen
 *
 */

const zahlen = [1, 3, 2, 5, 4, 7];

// Im Gegenesatz zu some durchsucht filter immer das ganze Array
const alleGeradenZahlen = zahlen.filter((element, index, array) => {
    console.log("element:", element);
    return element % 2 === 0;
});

console.log({ alleGeradenZahlen });

// Wenn kein Element die Bedingung erfüllt wird ein leeres Array zurück gegeben

const namen = ["hans", "ben", "maria", "jen"];

const alleNamenMitMehrAls7Buchstaben = namen.filter(
    (element) => element.length >= 7
);

console.log({ alleNamenMitMehrAls7Buchstaben });

/**
 * Array.find gibt das erste Element zurück das eine Bedingung erfüllt
 */

const users = [
    { id: "maria123", age: 23 },
    { id: "lockerxx", age: 53 },
    { id: "oppaa1", age: 98 },
];

const user = users.find((user) => (user.id = "lockerxx"));
console.log(user);
