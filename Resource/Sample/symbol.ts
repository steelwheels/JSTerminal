/*
 * symbol.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args: string[]): number
{
	let path = Symbols.characterA.path ;
	console.print("characterA : " + path + "\n") ;
	return 0 ;
}

