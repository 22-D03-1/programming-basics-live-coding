/**
 * Array.some
 *
 * some ist eine Array Methode. Mit some kann man überprüfen ob mindestens ein Element im Array eine Bedingung erfüllt.
 *
 */

const zahlen = [1, 3, 2, 5, 7, 8];

// Zum Beispiel kann man Array.some verwenden um herauszufinden ob mindestens eine Zahl gerade ist

const istMindestensEineZahlGerade = zahlen.some((element, index, array) => {
    console.log({ element, index, array });
    return element % 2 === 0;
});

console.log(istMindestensEineZahlGerade);

// some bricht automatisch die Suche ab wenn die callback Funktion zum ersten Mal true returned.

const namen = ["hans", "carla", "ben", "maya"];

const istMindestensEineCarlaImArray = namen.some((element) => {
    console.log(element); // hans, carla -> Danach wird abgebrochen weil carla gefunden wurde
    return element === "carla";
});

console.log(istMindestensEineCarlaImArray);
