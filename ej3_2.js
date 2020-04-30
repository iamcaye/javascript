// Dos funciones que sirven para comprobar si un numero es par o impar

let x = prompt('Di un numero');
let y = prompt('Di otro');

function esPar(x){
    return x%2 == 0;
}

function esImpar(x){
    return x%2 != 0;
}

console.log(x + ' es par?' + esPar(x));
console.log(y + ' es impar?' + esImpar(y));