const haus = {
    hoehe: 99,
    breite: 42,
    getBreite: function () {
        return this.breite;
    },
};

// Methode direkt aufrufen
// "this" klappt :)
console.log(haus.getBreite());

// Methode in einer Variable ablegen
// "this" klappt nicht :/
const unboundGetBreite = haus.getBreite;
console.log(unboundGetBreite());
// expected output: undefined

// Funktion mit bind an ein Objekt "binden"
// "this" klappt :)
function getHoehe() {
    return this.hoehe;
}
const boundGetHoehe = getHoehe.bind(haus);
console.log(boundGetHoehe());
// expected output: 99
