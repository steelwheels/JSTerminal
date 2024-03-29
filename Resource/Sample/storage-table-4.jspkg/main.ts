/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>

function main(args : [string])
{
	console.print("# storage-table-4\n") ;

	let table0 = TableStorage("storage", "table0") ;
	if(table0 == null){
		console.print("Failed to allocate table0\n") ;
		return -1 ;
	}

	let table1 = TableStorage("storage", "table1") ;
	if(table1 == null){
		console.print("Failed to allocate table1\n") ;
		return -1 ;
	}

	let ptr0 = table0.pointer(0, "c0") ;
	if(ptr0 == null){
		console.print("Failed to get pointer (0)\n") ;
		return -1 ;
	}

	table1.appendPointer(ptr0) ;

	let ptr1 = table1.pointer(0, "c0") ;
	if(ptr1 == null){
		console.print("Failed to get pointer (1)\n") ;
		return -1 ;
	}

	if(!table0.save()){
		console.print("Failed to save table0\n") ;
	}
	if(!table1.save()){
		console.print("Failed to save table1\n") ;
	}
	console.print("Summary ... OK\n") ;
	return 0 ;
}

