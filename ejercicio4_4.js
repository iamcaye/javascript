/*
 * Hacer una función deepEqual que recibe dos elementos y los compara. En el caso de que sean
 * objetos se asegura de que tengan las mismas propiedades
 */

function deepEqual(a,b){
	let res = true;
	if(a == null || b == null){
		res = false; 
	}
	else if(typeof(a) == typeof(b)){
		Ak = Object.keys(a);
		Bk = Object.keys(b);
		if(typeof(a) == 'object' && JSON.stringify(Ak) == JSON.stringify(Bk)){
			let As = JSON.stringify(a);
			let Bs = JSON.stringify(b);
			for(let i = 0 ; i < Ak.length ; i++){
				console.log(JSON.parse(As) -> JSON.parse(Ak[i]));
				//if(JSON.parse(a).Ak[i] != JSON.parse(b).Bk[i]){
					//res = false;
					//break;
				//}	
			}	
		}
		else if( a != b){
			res = false;
		}
	}else{
		res = false;
	}
	return res;
}

//let object = null;
//console.log(Object.keys(object));

let object1 = {
	value: 1,
	wtf: 5
};

let object2 = {
	value: 1,
	wtf: 5
};

console.log(deepEqual(object1, object2));
