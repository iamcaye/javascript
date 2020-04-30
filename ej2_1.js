//  Programa que dibuja la mitad de un triángulo por consola

let alt = prompt('Escoja la altura del triángulo');

while(alt < 0){
    console.log('Introduzca un dato valido');
    alt = prompt('Introduzca un dato valido');
}

let i = 0;
let tmp = '#';

for(i = 0 ; i < alt ; i++){
    console.log(tmp);
    tmp += '#';
}