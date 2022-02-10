/*
 * main.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/test_color.d.ts"/>
/// <reference path="types/test_graphics.d.ts"/>
/// <reference path="types/test_string.d.ts"/>
/// <reference path="types/test_table.d.ts"/>

function main(args : string[]): number
{
	let result = true ;

	console.log("===== Test: Color") ;
	result &&= test_color() ;

	console.log("===== Test: Graphics") ;
	result &&= test_graphics() ;

	console.log("===== Test: String") ;
	result &&= test_string() ;

	return result ? 0 : 1 ;
}

