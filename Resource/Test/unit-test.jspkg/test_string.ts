/*
 * test_string.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function test_string(): boolean
{
	let result = true ;

	let src0 = ["a", "bc", "def"] ;
	let len0 = maxLengthOfStrings(src0) ;
	console.print(`maxLengthOfString() = ${len0}\n`) ;
	if(len0 != 3){
		console.print(" => Error. Expect 3\n") ;
		result = false ;
	}

	console.print("adjustLengthOfStrings\n") ;
	let src1 = adjustLengthOfStrings(src0) ;
	for(let str of src1){
		console.print(`"${str}"\n`) ;
	}

	let src2 = ["1", "23", "45678"] ;
	console.print("pasteStrings\n") ;
	let src3 = pasteStrings(src0, src2, " : ") ;
	for(let str of src3){
		console.print(`"${str}"\n`) ;
	}

	return result ;
}

