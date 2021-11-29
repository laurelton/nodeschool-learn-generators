function *factorial(n) {
    for (let i = 1, total = 1; i <= n; i++) {
        total *= i;
        yield total;
    }
}

for (let n of factorial(5)) {
    console.log(n);
}
