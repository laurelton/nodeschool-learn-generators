function *flat(arr) {
    while (arr.length) {
        const curr = arr.shift();
        if (Array.isArray(curr)) {
            yield* flat(curr);
        } else {
            yield curr;
        }
    }
}

const nums = [1, [2, [3, 4], 5], 6];
for (const n of flat(nums)) {
    console.log(n);
}
