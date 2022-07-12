//              0    1    2    3    4    5    6    7    8    9     10
const kiste = ["g", "w", "w", "w", "w", "g", "g", "w", "w", "g"];
const robot = { /* ... */ };

// robot.start();

for (let i = 0; i < kiste.length; i++) {
    console.log("aktuelle Flasche:", kiste[i], "Index i:", i, "Kistenlänge:", kiste.length);
    // ...
}

// robot.stop();


// Schreibtischtest für den for-loop
// ---------------------------------
// kiste.length    i      i++     i <= kiste.length
// 10              0      1         t
// 10              1      2         t
// 10              2      3         t
// ...
// 10             9      10        t
// 10            10      11        f
