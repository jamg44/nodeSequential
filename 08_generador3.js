"use strict";

console.log('empiezo');

function espera( milis, n) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            // si me llaman con valor n impar devuelvo fallo
            // solo por motivos de testing
            var err = (n % 2 !== 0) ? new Error('ARRG ' + n + ' es impar!') : null;
            if (err) {
                return reject(err);
            }
            return resolve({id: n, name: 'Brown'});
        }, milis );
    });
}


// Llamada normal a la función espera
//espera(1000, 2).then( function(data) {
//    console.log(data);
//}).catch( function(err) {
//    console.log('ERROR', err);
//});

sync( function* () {
    try{

        let res = yield espera(1000, 0);
        console.log('res', res);

        res = yield espera(1000, 12);
        // si lo deseo puedo controlar un error para que no pare mi ejecución
        //res = yield espera(1000, 1).then((val)=>{
        //    console.log('fue bien,', val);
        //    return val;
        //}).catch((err) => {
        //    console.log('*** estoy herido seguir sin mi!', err);
        //});
        console.log('res1', res);

        res = yield espera(1000, 2);
        console.log('res', res);

        res = yield espera(1000, 3);
        console.log('res', res);

        res = yield espera(1000, 4);
        console.log('res', res);

        console.log('fin');
    } catch (ex) {
        console.log('*** muerto!', ex);
    }
})();




// de forma alternativa al try/catch tambien podría recoger el error así:
// sync.catch((err)=>{
//    console.log('Oh no un error!:', err);
//});

function sync(makeGenerator){
    return function () {
        var generator = makeGenerator.apply(this, arguments);
        function handle(result){
            // result => { done: [Boolean], value: [Object] }
            if (result.done) return Promise.resolve(result.value);

            return Promise.resolve(result.value).then(function (res){
                return handle(generator.next(res));
            }, function (err){
                return handle(generator.throw(err));
            });
        }

        try {
            return handle(generator.next());
        } catch (ex) {
            return Promise.reject(ex);
        }
    }
}
