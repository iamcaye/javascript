/* Hacer dos funciones:
 * - sum(...array) -> suma todos los numeros que contenga el array
 * - range(start, end, step) -> Crea un array que contiene todos los numeros desde start a end con un salto step. Si step no se especifica sera 1.
 */

 let sum = function(array){
    let res = 0;
    for(let i = 0 ; i < array.length ; i++){
        res += parseInt(array[i]); 
    }
    return res;
}

function range(...arguments){
    let start = 0;
    let end = 0;
    let step = 1;
    if(arguments.length == 1){
        end = parseInt(arguments[0]);
    }
    else if(arguments.length == 2){
        start = parseInt(arguments[0]);
        end = parseInt(arguments[1]);
    }
    else if(arguments.length >= 3){
        start = parseInt(arguments[0]);
        end = parseInt(arguments[1]);
        step = parseInt(arguments[2]);
    }
    
    let res = [];
    for(let i = start ; i <= end ; i += step){
        res.push(i);
    }

    return res;
}

function introducir(n){
    let res = [];
    for(let i = 0 ; i < n ; i++){
           res.push(prompt('Introduzca un numero'));
    }
    return res;
}

let x = prompt('start');
//let y = prompt('end');
//let z = prompt('step');

console.log(range(x));
console.log(sum(range(x)));