"use strict";

console.log('empiezo');

function espera(milis, n,  cb) {
    setTimeout(() => {
        if (n % 2 !== 0) {
            return cb(new Error('ARRG'));
        }
        return cb(null, {id: n, name: 'Brown'});
    }, milis );
}


//espera(2000, 'cb', (v) => {
//    console.log(v);
//});


run( function*(sigue) {

    for (var i = 0; i < 5; i++) {
        let res = yield espera(1000, i, sigue); // destructuring, missing you...
        console.log(res);
    }
    
});


function run(generatorFn) {
    var iterator = generatorFn(function() { 
        iterator.next(Array.from(arguments)); // Array.prototype.slice.call(arguments)
    });
    iterator.next();
}

