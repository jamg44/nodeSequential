"use strict";

console.log('Empiezo...');

function escribeTras2Segundos(callBack) {
    setTimeout(function() {
        console.log('texto');
        callBack();
    }, 1000);
}

// llama a una función n veces en serie,
// al finalizar llama a callBackFin
function serie(n, func, callBackFin) {
    if (n <= 0) {
        callBackFin();
        return;
    }
    n--;
    func(function () {
        serie(n, func, callBackFin);
    });
}

serie(5, escribeTras2Segundos, function(){
    console.log('He terminado!');
});
