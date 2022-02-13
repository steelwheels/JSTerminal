/*
 * main.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/test_color.d.ts"/>
/// <reference path="types/test_graphics.d.ts"/>
/// <reference path="types/test_string.d.ts"/>

function main(args : string[]): number
{
	let result = true ;

	console.print("===== Test: Color\n") ;
	result &&= test_color() ;

	console.print("===== Test: Graphics\n") ;
	result &&= test_graphics() ;

	//console.print("===== Test: String\n") ;
	//result &&= test_string() ;

	return result ? 0 : 1 ;
}

