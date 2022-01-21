/*
 * main.js
 */

/// <reference path="types/KiwiLibrary.d.ts" />
/// <reference path="types/KiwiShell.d.ts" />
/// <reference path="types/KiwiComponent.d.ts" />

function main(args: [string])
{
	console.log("the labyrinth in the lake") ;
	let retval = enterView("opening") ;
	console.log("Result = " + retval) ;
}

