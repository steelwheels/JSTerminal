/**
 * @file readline.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiShell.d.ts"/>

function main(args: string[])
{
	console.print("input line> ") ;
	let line = Readline.inputLine() ;
	console.print("line -> " + line + "\n") ;

	console.print("===== menu =====\n") ;
	let items = Readline.stringsToMenuItems(["a", "b", "c"], false) ;
	if(items != null){
		let idx = Readline.menu(items!) ;
		console.print("menu -> " + idx + "\n") ;
	} else {
		console.print("menu -> Error\n") ;
	}
	return 0 ;
}

