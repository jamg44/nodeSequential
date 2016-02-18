"use strict";

var fs = require('fs');

// función que lee un fichero retorna callBack
function leeFicheroCB( nomfile, callBack) {
    fs.readFile(nomfile, 'utf8', function (err, data) {
        console.log('versión callback');
        if (err) {
            return callBack(err);
        }
        return callBack(null, data);
    });
}

// función que lee un fichero retorna promesa
function leeFicheroPROM( nomfile) {
    console.log('versión promesa');
    return new Promise(function(resolve, reject){
        fs.readFile(nomfile, 'utf8', function (err, data) {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        });
    });
}

// función que lee un fichero retorna promesa y callback
function leeFichero( nomfile, callBack) {
    console.log('híbrida con ' + (callBack ? 'callBack' : 'promesa'));
    return new Promise(function(resolve, reject){
        fs.readFile(nomfile, 'utf8', function (err, data) {
            if (err) {
                if (callBack) {
                    return callBack(err);
                }
                return reject(err);
            }
            if (callBack) {
                return callBack(null, data);
            }
            return resolve(data);
        });
    });
}

var file = './_ficherotexto.txt';

//leeFichero(file, function(err, data) {
//    if (err) { return console.log('ERROR', err); }
//    console.log(data);
//});

// leeFichero con promesa
leeFichero(file).then( function(data) {
    console.log(data);
}).catch( function(err) {
    console.log('ERROR', err);
});