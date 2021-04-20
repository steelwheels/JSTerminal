/*
 * test_string.js
 */

function test_string()
{
	let result = true ;

	let src0 = ["a", "bc", "def"] ;
	let len0 = maxLengthOfStrings(src0) ;
	console.log(`maxLengthOfString() = ${len0}`) ;
	if(len0 != 3){
		console.log(" => Error. Expect 3") ;
		result = false ;
	}

	console.log("adjustLengthOfStrings") ;
	let src1 = adjustLengthOfStrings(src0) ;
	for(let str of src1){
		console.print(`"${str}"\n`) ;
	}

	let src2 = ["1", "23", "45678"] ;
	console.log("pasteStrings")
	let src3 = pasteStrings(src0, src2, " : ") ;
	for(let str of src3){
		console.print(`"${str}"\n`) ;
	}

	return result ;
}

