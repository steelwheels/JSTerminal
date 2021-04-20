/*
 * main.js
 */

function main(args)
{
	let result = true ;

	console.log("===== Test: Color") ;
	result &= test_color() ;

	console.log("===== Test: Graphics") ;
	result &= test_graphics() ;

	console.log("===== Test: String") ;
	result &= test_string() ;

	return result ? 0 : 1 ;
}

