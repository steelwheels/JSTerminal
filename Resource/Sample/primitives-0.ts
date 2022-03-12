/**
 * @file primitives-0.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(argv: string[]): void
{
	let res0 = recordTest() ;

	if(res0){
		console.print("Summary: OK\n") ;
	} else {
		console.print("Summary: Error\n") ;
	}	
}

function recordTest(): boolean 
{
	console.print("- Record test\n") ;
	let result = true ;

	let rec0 = Record() ;
	rec0.setValue(123, "a") ;
	console.print("toString : " + rec0.toString() + "\n") ;

	if(isRecord(rec0)){
		console.print("isRecord : OK\n") ;
	} else {
		console.print("isRecord : Error\n") ;
		result = false ;
	}
	let rec0p = toRecord(rec0) ;
	if(rec0p != null){
		console.print("toRecord : OK\n") ;
	} else {
		console.print("toRecord : Error\n") ;
		result = false ;
	}

	return result ;
}

