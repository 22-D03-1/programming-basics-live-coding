/**
 * Closures
 *
 * Eine Closure ist eine Funktion A die von einer anderen Funktion B returned wird und dadurch auf alles zugreifen kann was in Funktion B drin war.
 *
 */

function funktionB() {
    const geheimesPasswort = "123456";
    return function funktionA() {
        console.log(`Das passwort ist ${geheimesPasswort}`);
    };
}

const funktionA = funktionB();
funktionA();

/**
 * Erklärung zwei:
 * Eine Clusure ist eine Funktion die von einer anderen Funktion returned wird
 */

function closureFabrik() {
    const name = "Rahman";
    return function closure() {
        console.log(`Der name ist ${name}`);
    };
}

const closure = closureFabrik();
closure();

/**
 * Closures sind die besseren Klassen...?
 *
 */

class BankAccount {
    constructor() {
        this.balance = 0;
    }
    depositMoney(amount) {
        this.balance += amount;
    }
    withdrawMoney(amount) {
        this.balance -= amount;
    }
    printAccountStatement() {
        console.log(`Der Kontostand ist ${this.balance}`);
    }
}

const marvinsBankAccount = new BankAccount();
marvinsBankAccount.printAccountStatement();
marvinsBankAccount.depositMoney(1000);
marvinsBankAccount.printAccountStatement();
// Klassen haben einen entscheiden Nachteil:
// Alles in ihnen ist von außen aufrufbar
// Z.B kann man  marvinsBankAccount.balance direkt verändern
marvinsBankAccount.balance = 999999;
marvinsBankAccount.printAccountStatement();
// Oder noch schlimmer jemand klaut das Geld?
const geldTascheVonDieb = marvinsBankAccount.balance;
marvinsBankAccount.balance = 0;
marvinsBankAccount.printAccountStatement();
console.log("Die Geld Tasche vom Dieb: " + geldTascheVonDieb);

/**
 * Wie können wir mit Closures ein besseres Bankkonto bauen?
 */

function bankAccountFactory() {
    let balance = 0;
    function depositMoney(amount) {
        balance += amount;
    }
    function withdrawMoney(amount) {
        balance -= amount;
    }
    function printAccountStatement() {
        console.log(`Der Kontostand ist ${balance}`);
    }

    // Die bankAccountFactory returned jetzt drei closures
    return {
        depositMoney,
        withdrawMoney,
        printAccountStatement,
    };
}

const leosBankAccount = bankAccountFactory();

//Object.freeze(leosBankAccount);
// Mit freeze kann man sogar noch verhindern dass das Bankaccount objekt verändert wird

leosBankAccount.printAccountStatement();
leosBankAccount.depositMoney(1000);
leosBankAccount.printAccountStatement();
// Kann leo selbst sein Guthaben verändern?
leosBankAccount.balance = 999999; // Das ist wie Geld auf dem Bankautomat liegen lassen. Es wurde nicht eingezahlt
leosBankAccount.printAccountStatement(); // Nein
// Kann jemand leos guthaben klauen?
const geldTascheVonDieb2 = leosBankAccount.balance;
leosBankAccount.balance = 0;
leosBankAccount.printAccountStatement();
console.log(geldTascheVonDieb2); // Geld das auf dem Bankautomat lag
leosBankAccount.withdrawMoney(350);
leosBankAccount.printAccountStatement();
