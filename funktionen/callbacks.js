/**
 * Callbacks
 *
 * Ein Callback ist eine Funktion die als Parameter einer anderen Funktion übergeben wurde.
 */

function example(callback) {
    callback();
}

function callback() {
    console.log("Hallo aus dem Callback");
}

example(callback);

example(() => {
    console.log("Hallo aus der Arrow Funktion");
});

example(function () {
    console.log("Hallo aus der anonymen Funktion");
});

/**
 * Beispiele
 *
 * 1. Array Methoden
 * Array Methoden benutzen Callbacks. forEach zum Beispiel ruft den Callback ein mal für jedes Element im Array auf.
 */

const zahlen = [1, 2, 3, 4, 5, 6];
zahlen.forEach((zahl) => {
    console.log(zahl);
});

/**
 * 2. setTimeout
 * setTimeout benutzt auch einen Callback. Und der Callback wird dann nach x Millisekunden aufgerufen. In unserem Beispiel 1000
 */

setTimeout(() => {
    console.log("1000 Millisekunden sind vergangen");
}, 1000);

/**
 * 3. Event Listener
 * window.addEventListener benutzt einen Callback. Der Callback wird aufgerufen wenn das festgelegte Event eintritt
 */

// window.addEventListener("click", (e) => {
//     console.log("click");
// });
