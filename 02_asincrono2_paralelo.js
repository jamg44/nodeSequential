"use strict";

console.log('Empiezo...');

function escribeTras2Segundos(callBack) {
    setTimeout(function() {
        console.log('texto');
        callBack();
    }, 1000);
}


for (var i = 0; i < 5; i++) {
    escribeTras2Segundos(function(){
        //console.log(i);
        //if (i > 4) {
        //    console.log('terminado');
        //}
        textoEscrito();
    });
}

var numVeces = 0;

function textoEscrito(){

    // apunto cuantas llevo
    numVeces++;

    // compruebo si he terminado
    if (numVeces === 5) {
        console.log('He terminado!');
    }
}
