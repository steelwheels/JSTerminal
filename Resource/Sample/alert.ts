/*
 * alert.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>

function main(args : string[]): number
{
	console.print("Hello\n") ;
	let result = alert(AlertType.informational, "Hello, world") ;
	console.print("result = " + result + "\n") ;
	return 0 ;
}

