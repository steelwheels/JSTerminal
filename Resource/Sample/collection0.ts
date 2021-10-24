/**
 * collection0.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args: string[])
{
	let col0 = Collection() ;

	let paths: URLIF[] = [
		Symbols.chevronBackward,
		Symbols.chevronForward
	] ;
	col0.add("Header", "Footer", paths) ;

	console.print("/* result */\n") ;
	let strs = col0.toStrings() ;
	for(let line of strs){
		console.print(line + "\n") ;
	}

	return 0 ;
}

