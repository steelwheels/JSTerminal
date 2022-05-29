/*
 * main.ts
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>
/// <reference path="../types/KiwiComponent.d.ts"/>

function main(args: string[]): void
{
	console.log("Hello, world !!") ;
	let retval = enterView("main", null) ;
	console.log("exit-code = " + retval.exit) ;
}

