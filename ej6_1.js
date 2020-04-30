/*
 *  Crear un objeto de tipo vector
 */

class Vector{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    minus(vector){
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    plus(vector){
        return new Vector(this.x + vector.x, this.y + vector.y);
    }
}

let a = new Vector(1,2);
let b = new Vector(1,2);

console.log(a.minus(b));
console.log(a.plus(b));
