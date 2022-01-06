/*
 * main.js
 */

function main(args)
{
	console.log("**** Storage0") ;

	let storage0 = ValueStorage("storage0") ;
	if(storage0 == null){
		console.log("Failed to allocate") ;
		return -1 ;
	}
	let vala = storage0.value(["a"]) ;
	console.log("a = " + vala) ;

	storage0.set(1234, ["b"]) ;
	let valb = storage0.value(["b"]) ;
	console.log("b = " + valb) ;

	console.print("store operation ... ") ;
	if(storage0.store()){
		console.print("OK\n") ;
	} else {
		console.print("Failed\n") ;
	}

	return 0 ;
}

