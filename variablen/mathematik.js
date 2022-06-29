/**
 * Mit JavaScript rechnen
 * Was brauchen wir?
 *
 * 1. Mindestens eine Zahl
 * 2. Operation z.B +, -, *, /, %(Modulo)
 */

// Rechnung mit Plus

const alterTick = 8;
const alterTrick = 10;
const alterTrack = 9;

const alterGesamt = alterTick + alterTrick + alterTrack;

console.log(alterGesamt);

// Rechnung mit Mal

const kostenApfel = 0.9; //€
const anzahlÄpfel = 17; //€
const mehrwertSteuer = 1.19;

const kostenAepfelFuerBravecoder = kostenApfel * anzahlÄpfel;

console.log(
    kostenAepfelFuerBravecoder,
    "€ Netto",
    kostenAepfelFuerBravecoder * mehrwertSteuer,
    "€ Brutto"
);

// Rechnung mit Modulo
// Modulo gibt den Rest einer Division zurück

/**
 * Dominik hat 55 Bananen und verteilt sie gleichmäßig an 17 Bravecoder
 * Wieviele Bananen bleiben übrig? Am Ende soll jeder Bravecoder gleich viele Bananen haben.
 */

const anzahlUebrigeBananen = 55 % 17;
console.log(anzahlUebrigeBananen);
