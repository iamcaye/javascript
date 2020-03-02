/*
 * Se explica el concepto de listas enlazadas y se piden las siguientes funciones:
 * - arrayToList(array)
 * - listToArray(list)
 */


function arrayToList(array){
	let list = {
		value: array[array.length -1],
		rest: null
	};

	let tmp=list;
	for(let i = array.length-2 ; i >= 0 ; i--){
		tmp = {
			value: array[i],
			rest: list
		};
		list = tmp;
	}
	return list;
}

function listToArray(list){
	let array = [];	
	let tmp = list;
	do{
		array.push(tmp.value);
		tmp = tmp.rest;
	}while(tmp.rest != null)
	array.push(tmp.value);
	return array;
}

function prepend(value, list){
	let tmp = listToArray(list);
	tmp.push(value);
	list = arrayToList(tmp);
	return list;
}

function nth(ind, list){
	let tmp = listToArray(list);
	return tmp[ind];
}

var foo = [1,2,3,4];
var str = arrayToList(foo);
var lista = listToArray(str);

//console.log(foo);
//console.log(JSON.stringify(str));
//console.log(lista);

console.log(foo);
console.log(nth(2,str));
