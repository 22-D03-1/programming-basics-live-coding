/**
 * Wenn der Code im if statement nur aus einem Ausdruck bzw. einer Zeile besteht braucht man die geschweiften Klammern nicht.
 */

const day = "Donnerstag";

if (day === "Donnerstag") console.log("Bald Wochenende");

/**
 * Schwierige Bedinungen
 */

const alterSuse = 18;
const alterMaria = 19;
const alterJonas = 7;

if (alterSuse >= 18 && alterMaria >= 18 && alterJonas >= 18) {
    console.log("Ihr dürft alle drei auf das Festival");
} else {
    console.log("Alle müssen >= 18 sein!");
}

if (alterMaria >= 18 || alterJonas >= 18)
    console.log("Einer von euch ist >= 18");
