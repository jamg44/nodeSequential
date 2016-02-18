"use strict";

console.log('Empiezo...');

var escribeTras2Segundos = function(texto, callBack) {
	setTimeout(function(){
		console.log(texto);
		callBack();
	}, 2000);
};

escribeTras2Segundos('texto1', function() {
	escribeTras2Segundos('texto2', function() {
		console.log('Fin.');
	});
});


// que pasaría si hicieramos esto?
//
//escribeTras2Segundos('texto1', 
//	escribeTras2Segundos('texto2', function() {
//		console.log('Fin.');
//	})
//);
//
// Cual es problema? 
// 		A la primera llamada no le estoy pasando una función en el segundo 
//		parámetro, sino el resultado de una funcion.
// 
// Porque sale texto2 antes que texto1?
//		La segunda se ejecuta antes para poder pasarse como parámetro de la primera.
//
// Porque da un error al final?
//		La primera espera una función como callBack, pero recibe el resultado de la 
//		segunda, que es undefined porque no retorna nada con 'return'
//