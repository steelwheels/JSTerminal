/*
 * alert.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>

function main(args : string[]): number
{
	console.log("Hello") ;
	let result = alert("Hello, world") ;
	console.log("result = " + result) ;
	return 0 ;
}

