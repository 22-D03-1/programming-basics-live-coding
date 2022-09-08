const zahlen = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (let i = 1; i < zahlen.length; i++) {
    for (let j = 0; j < i; j++) {
        if (zahlen[i] < zahlen[j]) {
            let x = zahlen[i];
            zahlen[i] = zahlen[j];
            zahlen[j] = x;
        }
    }
}
