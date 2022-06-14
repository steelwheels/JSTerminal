/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.print("# value-storage-4\n") ;
	let result = 0 ;

	let storage = Storage("storage") ;
	if(storage == null){
		console.print("Failed to allocate storage\n") ;
		return -1 ;
	}

	let val = storage.value("set0") ;
	console.print("class  = " + val.class + "\n") ;
	console.print("values = " + val.values + "\n") ;

	if(result == 0){
		console.print("summary ... OK\n") ;
	} else {
		console.print("summary ... Error\n") ;
	}

	return result ;
}

