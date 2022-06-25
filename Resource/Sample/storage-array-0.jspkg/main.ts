/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.print("# storage-arr-0\n") ;
	let result = 0 ;

	let storage = Storage("storage") ;
	if(storage == null){
		console.print("Failed to allocate storage\n") ;
		return -1 ;
	}
	let array0 = ArrayInStorage("array0", storage) ;
	if(array0 == null){
		console.print("Failed to allocate array\n") ;
		return -1 ;
	}
	
	console.print("*** Initial state\n") ;
	console.print("count = " + array0.count + "\n") ;
	printArray(array0) ;

	console.print("*** Append 2\n") ;
	array0.append(2) ;
	printArray(array0) ;
	console.print("*** Set [0] = 4\n") ;
	array0.set(4, 0) ;
	printArray(array0) ;

	return result ;
}

function printArray(src: ArrayIF)
{
	console.print("[") ;
	for(let val of src.values) {
		console.print(val + " ") ;
	}
	console.print("]\n") ;
}

