"use strict";

function* ranger (start, end) {

    while (start <= end) {

        //yield start;
        let newStart = yield start;

        // restart the counter
        if (typeof newStart !== 'undefined') {
            console.log('newStart = ' + newStart);
            start = newStart - 1;
        }

        start++;
    }
    return 'fin';
}

let range = ranger(0, 10);

//for (let n = range.next(); !n.done; n = range.next()){
//    console.log(n);
//}

//for (let valor of range){
//    console.log(valor);
//}

console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
// console.log(range.next(0));
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
