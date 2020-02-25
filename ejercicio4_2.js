/*
 * Write two functions:
 * - reverseArray(array) -> devuelve un array que es el inverso al que le metemos sin modificarlo
 * - reverseArrayInPlace(array) -> modifica el array que le metemos dandole la vuelta
 */

function reverseArray(array){
    let res = [];
    let size = array.length;
    for(i = size-1 ; i >= 0 ; i--){
        res.push(array[i]);
    }
    return res;
}

function reverseArrayInPlace(array){
    x = reverseArray(array);
}

let x = prompt('array');
console.log(reverseArray(x));
reverseArrayInPlace(x);
console.log(x);