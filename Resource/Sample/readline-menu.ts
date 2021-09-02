/*
 * cli-menu.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>

function main(args: string[]): number
{
	console.log("Readline: menu") ;
	let result = Readline.menu(["item A", "item B", "item C"]) ;
	console.log("result = " + result + "\n") ;
	return 0 ;
}

