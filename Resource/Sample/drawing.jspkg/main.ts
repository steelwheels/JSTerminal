/*
 * main.js
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>

function main(args: string[])
{
	console.log("Hello, world !!") ;
	let retval = enterView("drawing", null) ;
	console.log("Result = " + retval) ;
}

