// Crear una función que cuente las veces que aparece una letra que le indiquemos en un string que le pasamos por parametro

let c = prompt('Introduzca un caracter');
let str = prompt('Introduzca una frase');
let count = 0;

function countChar(str, c){
    let h = 0;
    for(let i = 0 ; i < str.length ; i++){
        if(c == str[i]){
            h++;
        }
    }
    return h;
}

count = countChar(str, c);
console.log('En la frase habían ' + count + ' ' + c);
