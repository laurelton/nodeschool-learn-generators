var fs = require('fs');

function run (generator) {
    const it = generator(go);

    function go (err, result) {
        if (err) {
            it.throw(err);
        }

        it.next(result);
    }

    go();
}

run(function* (done) {
    try {
        var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
        var firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
    } catch (e) {
        firstFile = null;
    }

    console.log(firstFile);
});
