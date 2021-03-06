/*
 * keycode.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args : string[]): number
{
	let docont = true ;
	while(docont){
		let c = stdin.getc() ;
		let code = c.charCodeAt(0) ;
		printCode(code) ;
		docont = (c != "q") ;
	}
	return 0 ;
}

function printCode(code: number)
{
	let name = asciiCodeName(code) ;
	if(name == null){
		name = "?" ;
	}
	let hexcode = "0x" + code.toString(16) ;
	stdout.put(name + ":" + hexcode + "\n") ;
}

