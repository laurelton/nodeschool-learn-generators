function *upper(arr) {
    while (arr.length) {
        const curr = arr.shift();
        let upperCase = null;
        try {
            upperCase = curr.toUpperCase();
        } catch (e) {}
        
        yield upperCase;
    }
}

const badItems = ['a', 'B', 1, 'c'];
for (const item of upper(badItems)) {
    console.log(item);
}
