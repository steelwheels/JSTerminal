/*
 * main.js
 */

function main(args)
{
	console.log("**** Storage0") ;

	let storage0 = ValueStorage("storage0") ;
	if(storage0 == null){
		console.log("Failed to allocate") ;
	}
}

