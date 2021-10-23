/*
 * symbol.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>

function main(args: string[]): number
{
	let size = Symbols.characterA.size ;
	console.log("characterA : (" + size.width + ", " + size.height + ")") ;
	return 0 ;
}

