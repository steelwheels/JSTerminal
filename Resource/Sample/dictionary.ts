/**
 * @main dictionary.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(argv: string[])
{
	console.print("Hello, dictionary.\n") ;

	let result = true ;

	let dict  = Dictionary() ;
	if(dict == null){
		result = false ;
	}

	dict.setNumber(1234, "n0") ;
	dict.setString("hello", "s0") ;

	let rn0 = dict.number("n0") ;
	if(rn0 != null){
		if(rn0 == 1234){
			console.print("rn0 -> exp:1234 -> result:1234\n") ;
		} else {
			console.error("[Error] Invalid value: rn0\n") ;
		}
	} else {
		console.error("[Error] unexpected null for rn0\n") ;
		result = false ;
	}

	let rs0 = dict.string("s0") ;
	if(rs0 != null){
		if(rs0 == "hello"){
			console.print("rs0 -> exp:hello -> result:hello\n") ;
		} else {
			console.error("[Error] Invalid value: rs0\n") ;
		}
	} else {
		console.error("[Error] unexpected null for rs0\n") ;
		result = false ;
	}

	/* Subdirectory */
	let subdict = Dictionary() ;
	if(subdict != null){
		subdict.setNumber(1234, "x") ;
		subdict.setString("child", "y") ;
	} else {
		result = false ;
	}
	dict.setDictionary(subdict, "d0") ;

	let rd0 = dict.dictionary("d0") ;
	if(rd0 != null){
		console.print("rd0: x -> 1234  -> " + rd0.number("x") + "\n") ;
		console.print("rd0: y -> child -> " + rd0.string("y") + "\n") ;
	} else {
		console.error("[Error] unexpected null for rd0\n") ;
		result = false ;
	}

	if(result){
		console.print("Summary: OK\n") ;
	} else {
		console.print("Summary: Error\n") ;
	}
	return 0 ;
}

