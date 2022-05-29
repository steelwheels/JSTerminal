/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>
/// <reference path="../types/KiwiComponent.d.ts"/>

function main(args : [string])
{
	console.print("# func-1\n") ;
	let retval = enterView("main_func", null) ;
	console.print("retval = " + retval + "\n") ;
	return 0 ;
}

