/*
 * scroll0.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args : string[]): number
{
	for(let i=0 ; i<40 ; i++){
		console.log("i = " + i) ;
	}
	let ecode =   EscapeCode.cursorUp(30)
	            + EscapeCode.scrollUp(4) ;
	console.print(ecode) ;
	return 0 ;
}

