/*
 * main.js
 */

/// <reference path="../types/KiwiLibrary.d.ts"/>
/// <reference path="../types/KiwiComponent.d.ts"/>

function main(args: string[])
{
	console.log("Hello, world !!") ;
	let retval = enterView("main", "Hello from main.js") ;
	console.log("exit-code = " + retval) ;
}

