/*
 * main.js
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>

function main(args: string[])
{
	console.log("enterView: controls") ;
	let retval = enterView("controls", null) ;
	console.log(  "Result = {\n"
		    + "  check0: " + retval.check0 + "\n"
		    + "  check1: " + retval.check1 + "\n"
		    + "}") ;
}

