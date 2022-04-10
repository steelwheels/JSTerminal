/*
 * main.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.print("# value-storage-3\n") ;
	let result = 0 ;

	let storage = ValueStorage("storage") ;
	if(storage == null){
		console.print("Failed to allocate storage\n") ;
		return -1 ;
	}

	/* set value */
	let val0 = checkValue(storage, "data[0].c0") ;
	checkValue(storage, "data[1].c1") ;
	checkValue(storage, "data[2].c1") ;
	let val3 = checkValue(storage, "data[2].c2") ;

	if(val0 != val3){
		console.print("unexpected result: " + val0 + ", " + val3) ;
		result = -1 ;
	} 

	/* Save entire value */
	if(storage.save()){
		console.print("store ... done\n") ;
	} else {
		console.print("store ... failed\n") ;
	}

	if(result == 0){
		console.print("summary ... OK\n") ;
	} else {
		console.print("summary ... Error\n") ;
	}

	return result ;
}

function checkValue(storage: ValueStorageIF, path: string): number | null
{
	console.print("path: " + path + " = ") ;
	let val = storage.value(path) ;
	if(val != null){
		console.print(val + "\n") ;
		return val ;
	} else {
		console.print("null\n") ;
		return null ;
	}
}

