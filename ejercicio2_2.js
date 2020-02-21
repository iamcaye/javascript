/* Programa que muestra los numeros del 1 al 100 excepto:
 *  - Si son divisibles entre 3, mostrara 'Fizz'
 *  - Si no son divisibles entre 3, pero si entre 5, mostrará 'Fizz'
 *  - Si es divisible entre 3 y 5, mostrara 'FizzBuzz'
 */

let num;

for(num = 1 ; num <= 100 ; num++){
    if(num % 3 == 0 && num % 5 == 0){
        console.log('FizzBuzz');
        continue;
    }
    else if(num % 3 == 0){
        console.log('Fizz');    
    }
    else if( num % 5 == 0){
        console.log('Buzz');
    }
    else{
        console.log(num)
    }
}