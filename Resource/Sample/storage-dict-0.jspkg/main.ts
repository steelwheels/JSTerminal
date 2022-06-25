/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.print("# storage-dict-0\n") ;
	let result = 0 ;

	let storage = Storage("storage") ;
	if(storage == null){
		console.print("Failed to allocate storage\n") ;
		return -1 ;
	}
	let dict0 = DictionaryInStorage("dict0", storage) ;
	if(dict0 == null){
		console.print("Failed to allocate dictionary\n") ;
		return -1 ;
	}
	
	console.print("*** Initial state\n") ;
	console.print("count = " + dict0.count + "\n") ;
	if(printDict(dict0) != 0){
		result = -1 ;
	}

	console.print("*** Append d=12.3\n") ;
	dict0.set(12.3, "d") ;
	printDict(dict0) ;

	let dval = dict0.value("d") ;
	if(dval != null){
		if(dval == 12.3){
			console.print("set -> value test: OK\n") ;
		} else {
			console.error("Failed to get write-result\n") ;
			return -1 ;
		}
	} else {
		console.error("No write result\n") ;
		result = -1 ;
	}

	return result ;
}

function printDict(src: DictionaryIF): number
{
	let result = 0 ;
	console.print("[\n") ;
	for(let key of src.keys) {
		let val = src.value(key) ;
		if(val != null){
			console.print(" key:" + key + ", val:" + val + "\n") ;
		} else {
			console.error("Can not happen: no value\n") ;
			result = -1 ;
		}
	}
	console.print("]\n") ;
	return result ;
}

