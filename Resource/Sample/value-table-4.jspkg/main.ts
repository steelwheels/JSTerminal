/*
 * main.ts
 */

/// <reference path="types/KiwiLibrary.d.ts"/>
/// <reference path="types/KiwiComponent.d.ts"/>

function main(args : [string])
{
	console.print("# value-table-4\n") ;
	let retval = enterView("table") ;
	console.print("retval = " + retval + "\n") ;
	return 0 ;
}

