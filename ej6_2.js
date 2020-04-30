/*
 *  Crear un objeto con el mismo funcionamiento que un SET, pero llamala GROUP
 *  con los siguientes metodos:
 *   - add -> aniade un numero al grupo
 *   - delete -> ...
 *   - has -> ...
 */

class Group{
    constructor(){
        this.items = [];
    }

    add(x){
        this.items.push(x);
    }

    delete(a){
        for (let i = 0 ; i < this.items.length ; i++){
            if(this.items[i] == a){
                this.items.splice(i,1);
            }
        } 
    }

    has(a){
        for (let x in this.items){
            if(x == a){
                return true;
            }
        }
        return false;
    }
}


