/*
 * main.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.print("# value-storage\n") ;
	let result = 0 ;

	let storage = ValueStorage("storage") ;
	if(storage == null){
		console.print("Failed to allocate storage\n") ;
		return -1 ;
	}

	/* set/get scalar */
	storage.set(1234, "a") ;
	console.print("a = " + storage.value("a") + "\n") ;

	/* set/get object */
	let obj0 = {
		v0: -1234,
		v1: "hello"
	} ;
	console.print("obj0 = " + obj0 + "\n") ;

	storage.set(obj0, "b") ;
	console.print("b.v0 = " + storage.value("b.v0") + "\n") ;
	console.print("b    = " + storage.value("b") + "\n") ;

	/* Save entire value */
	if(storage.store()){
		console.print("store ... done\n") ;
	} else {
		console.print("store ... failed\n") ;
	}

	return result ;
}

