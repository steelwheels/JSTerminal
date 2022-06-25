/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.print("# storage-set-0\n") ;
	let result = 0 ;

	let storage = Storage("storage") ;
	if(storage == null){
		console.print("Failed to allocate storage\n") ;
		return -1 ;
	}
	let set0 = SetInStorage("set0", storage) ;
	if(set0 == null){
		console.print("Failed to allocate set\n") ;
		return -1 ;
	}
	
	console.print("*** Initial state\n") ;
	console.print("count = " + set0.count + "\n") ;
	printSet(set0) ;

	console.print("*** Updated state\n") ;
	set0.insert(2) ;
	set0.insert(5) ;
	printSet(set0) ;

	return result ;
}

function printSet(src: SetIF)
{
	console.print("[") ;
	for(let val of src.values) {
		console.print(val + " ") ;
	}
	console.print("]\n") ;
}

