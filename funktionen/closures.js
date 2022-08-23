// Um diese Log Messages auszugeben, müssen wir stets darauf achten,
// dass wir Date.now() aufrufen und das Log Level korrekt angeben.
// Das ist sehr fehleranfällig und sollte geändert werden.
console.log(Date.now(), "INFO", "setup successful");
console.log(Date.now(), "INFO", "mail sent");
console.log(Date.now(), "WARNING", "low storage warning");
console.log(Date.now(), "ERROR", "user could not be created");


console.log("---");


// Wir schreiben zunächst eine Funktion, die unsere Meldung formatiert
// und bspw. Date.now() setzt.
// Wir müssen nun nur noch unsere Message und optional das Log Level übergeben.
// Wird letzteres nicht übergeben, erscheint eine INFO Message.
function logMessage(message, level = "INFO") {
    console.log(Date.now(), `[${level}]`, message);
}

logMessage("setup successful");
logMessage("mail sent");
logMessage("low storage warning", "WARNING");
logMessage("user could not be created", "ERROR");
// Das birgt aber die Gefahr, dass wir das Log Level falsch schreiben
// und somit die Meldung nicht wiederfinden, wenn tausende Meldungen gespeichert wurden.
logMessage("you will not find me!", "ERoR");


console.log("---");


// Um das Log Level Problem in den Griff zu bekommen,
// schreiben wir drei separate Funktionen: eine für jedes Level.
// So müssen wir nur noch die Message übergeben,
// alles andere ist vordefiniert und kann nicht falsch ausgegeben werden.
function logInfo(message) {
    console.log(Date.now(), `[INFO]`, message);
}
function logWarning(message) {
    console.log(Date.now(), `[WARNING]`, message);
}
function logError(message) {
    console.log(Date.now(), `[ERROR]`, message);
}

logInfo("setup successful");
logInfo("mail sent");
logWarning("low storage warning");
logError("user could not be created");

// Nun haben wir aber drei Funktionen, die sich sehr ähnlich sehen.
// Wenn wir ein weiteres Log Level einführen wollen, müssen wir zudem eine neue Funktion definieren.
// Soll sich das Ausgabeformat ändern (Doppelpunkt nach dem Timestamp,
// Eckige Klammern beim Log Level weg etc.) müssen wir alle Funktionen einzeln anpassen.


console.log("---");


// Um das zu vereinfachen, können wir Closures verwenden!
// Closures bestehen aus einer äußeren und inneren Funktion.
// Die innere Funktion wird beim Aufruf der äußeren zurückgegeben.
// Durch die äußere Funktion erzeugen wir einen Scope,
// auf den nur die innere Funktion zugreifen kann.
// Vereinfacht gesagt: Die äußere Funktion baut uns die innere Funktion auf.
// Mit dem Parameter der äußeren Funktion können wir bspw. gewisse Werte festlegen.

// In unserem Fall legen wir das Log Level fest.
// Die innere Funktion, die wir zurückbekommen, wird nun immer dieses Log Level verwenden.
function logger(logLevel) {
    const logMessage = (message) => {
        console.log(`${Date.now()}: [${logLevel}] ${message}`);
    }
    return logMessage;
}

// Nach dem Aufruf der äußeren Funktion speichern wir
// die zurückgegebene innere Funktion in einer Variable.
const logInfo = logger("INFO");
const logWarning = logger("WARNING");
const logError = logger("ERROR");

// Da die Variable eine Funktion enthält, können wir diese
// nun zu einem späteren Zeitpunkt aufrufen.
logInfo("setup successful");
logInfo("mail sent");
logWarning("low storage warning");
logError("user could not be created");
