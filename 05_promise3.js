"use strict";

var fs = require('fs');

function conArroz( plato) {
    return new Promise(function(resolve, reject){
        process.nextTick(function() {
            //return reject(plato);
            return resolve(plato + ' arroz');
        });
    });
}

function conAjo( plato) {
    return new Promise(function(resolve, reject){
        process.nextTick(function() {
            //return reject(plato);
            return resolve(plato + ' ajo');
        });
    });
}

function con( plato, ing) {
    return new Promise(function(resolve, reject){
        process.nextTick(function() {
            //return reject(plato);
            return resolve(plato + ' ' + ing);
        });
    });
}

var paella = 'paella con';


conArroz(paella)

    // ajo
    .then( conAjo)

    // sal
    .then( function(plato) { return con(plato, 'sal'); })

    // fin
    .then( function(data) { console.log(data); })

    .catch( function(err) {
        console.log('ERROR', err);
    });
