// Programa para hacer un tablero de ajedrez tal que asi:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

let size = prompt('Escoja el tamaño del tablero');
let x = '#';

let par = new Array(size);
let imp = new Array(size);

for(let i = 0 ; i < size ; i++){
    if(i % 2 == 0){
        par[i] = x;
        imp[i] = " ";
    }
    else{
        par[i] = " ";
        imp[i] = x;
    }
}

for(let i = 0 ; i < size ; i++){
    if(i % 2 == 0){
        console.log(par);
    }
    else{
        console.log(imp);
    }
}
