/**
 * for Schleifen
 *
 * Was sind Schleifen?
 * Schleifen sind eine Möglichkeit Code wiederholt ablaufen zu lassen.
 *
 * Eine for Schleifen ist eine bestimmte Art von Schleife. Es gibt noch viele weitere, z.B while Schleifen.
 *
 * Wie sieht eine for Schleife aus?
 *
 */

//  start     ; check  ; danach
for (let i = 0; i <= 10; i++) {
    // Der Code der wiederholt werden soll
    console.log(i);
}

/**
 * Start:
 * Dieser Code wird nur ein mal bei Erreichen der for Schleife ausgeführt. Meistens wird hier eine Zählervariable deklariert und ihr ein Wert zugewiesen
 *
 * Check:
 * Diese Bedingung wird vor jedem Schleifendurchlauf evaluiert.
 * Ist die Bedingung true wird die Schleife noch ein mal ausgeführt.
 *
 * Danach:
 * Dieser Code wird nach jedem Schleifendurchlauf ausgeführt.
 */

let zaehler = 0;
//  start     ; check  ; danach
for (
    console.log("start", "zaehler:", zaehler);
    zaehler <= 3;
    console.log("danach", "zaehler", zaehler)
) {
    // Der Code der wiederholt werden soll
    console.log("zaehler:", zaehler);
    zaehler++;
}

/**
 * ++ bedeutet erhöhe Variable um 1
 * += 2 bedeutet erhöhe Variable um 2
 */

for (let j = 0; j < 6; j += 2) {
    console.log(j);
}


