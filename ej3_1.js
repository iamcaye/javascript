// Programa para obtener el minimo de dos numeros

let x = prompt('Introduzca un numero');
let y = prompt('Introduzca otro');

function min(a,b){
    if(a < b){
        result = a;
    }else{
        result = b;
    }
    
    return result;
}


console.log(min(x,y));