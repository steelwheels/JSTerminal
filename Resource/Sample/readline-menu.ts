/*
 * cli-menu.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>

function main(args: string[]): number
{
	console.log("Readline: menu") ;

	let items: MenuItem[] = [
		{key: "A", label: "Item A"},
		{key: "B", label: "Item B"},
		{key: "C", label: "Item C"}
	] ;

	let result = Readline.menu(items) ;
	console.log("result = " + result + "\n") ;
	return 0 ;
}

